using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Http;
using AspNet.Security.OAuth.Discord;
using Authorization.Models;
using Diplomwork.Models;
using Diplomwork.Models.DatabaseModels.Data;
using Microsoft.AspNetCore.Authentication.OAuth;
using System.Security.Claims;
using System.Text.Encodings.Web;
using Diplomwork.Models.DatabaseModels.Tables;
using Microsoft.AspNetCore.Authorization;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Configure DbContext
string connectionString = configuration.GetConnectionString("DefaultConnection")!;
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Configure Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.Name = IdentityConstants.ApplicationScheme;
    options.Cookie.SameSite = SameSiteMode.None;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
});

builder.Services.ConfigureExternalCookie(options =>
{
    options.Cookie.Name = IdentityConstants.ExternalScheme;
    options.Cookie.SameSite = SameSiteMode.None;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    options.Cookie.Path = "/";
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = IdentityConstants.ApplicationScheme;
    options.DefaultSignInScheme = IdentityConstants.ExternalScheme;
    options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
})
.AddGoogle(googleOptions =>
{
    googleOptions.SignInScheme = IdentityConstants.ExternalScheme;
    googleOptions.ClientId = configuration["Authentication:Google:ClientId"]!;
    googleOptions.ClientSecret = configuration["Authentication:Google:ClientSecret"]!;
    googleOptions.CallbackPath = "/api/authorization/external-login-callback/Google";

    googleOptions.Scope.Clear();
    googleOptions.Scope.Add("openid");
    googleOptions.Scope.Add("profile");
    googleOptions.Scope.Add("email");

    googleOptions.Events = new OAuthEvents
    {
        OnTicketReceived = async ctx =>
        {
            var email = ctx.Principal.FindFirst(ClaimTypes.Email)?.Value;
            var name = ctx.Principal.FindFirst(ClaimTypes.Name)?.Value ?? email;

            var svc = ctx.HttpContext.RequestServices.GetRequiredService<AuthorizationService>();
            var jwt = await svc.ExternalLoginOrRegistration("Google", name!, email!);

            var returnUrl = ctx.Properties.Items["returnUrl"] ?? "/";
            Console.WriteLine($"jwt:" + jwt);
            ctx.Response.Redirect($"{returnUrl}?token={jwt}");
            ctx.HandleResponse();    
        },

        OnRemoteFailure = ctx =>
        {
            ctx.Response.Redirect($"/error?message={UrlEncoder.Default.Encode(ctx.Failure.Message)}");
            ctx.HandleResponse();
            return Task.CompletedTask;
        }
    };
})
.AddDiscord(discordOptions =>
{
    discordOptions.SignInScheme = IdentityConstants.ExternalScheme;
    discordOptions.ClientId = configuration["Authentication:Discord:ClientId"]!;
    discordOptions.ClientSecret = configuration["Authentication:Discord:ClientSecret"]!;
    discordOptions.CallbackPath = "/api/authorization/external-login-callback/Discord";

    discordOptions.Scope.Clear();
    discordOptions.Scope.Add("identify");
    discordOptions.Scope.Add("email");

    discordOptions.Events = new OAuthEvents
    {
        OnTicketReceived = async ctx =>
        {
            var email = ctx.Principal.FindFirst(ClaimTypes.Email)?.Value;
            var name = ctx.Principal.FindFirst(ClaimTypes.Name)?.Value ?? email;

            var svc = ctx.HttpContext.RequestServices.GetRequiredService<AuthorizationService>();
            var jwt = await svc.ExternalLoginOrRegistration("Discord", name!, email!);

            var returnUrl = ctx.Properties.Items["returnUrl"] ?? "/";
            ctx.Response.Redirect($"{returnUrl}?token={jwt}");
            ctx.HandleResponse();
        },

        OnRemoteFailure = ctx =>
        {
            ctx.Response.Redirect($"/error?message={UrlEncoder.Default.Encode(ctx.Failure.Message)}");
            ctx.HandleResponse();
            return Task.CompletedTask;
        }
    };
});


// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactDev", policy =>
    {
        policy.WithOrigins("https://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

// Application services
builder.Services.AddScoped<AuthorizationService>();
builder.Services.AddScoped<EmailSender>();
builder.Services.AddSingleton<JwtAuthService>(provider =>
{
    var config = provider.GetRequiredService<IConfiguration>();
    return new JwtAuthService(config, 60);
});

// Controllers and Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Apply migrations
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate();
}


app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("AllowReactDev");

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = "swagger";
    });
}

app.Run();
