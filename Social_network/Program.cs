using Social_network.Models.Data;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



string conn = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDBContext>(
    options => options.UseMySql(
        conn,
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection")),
         mySqlOptions => mySqlOptions.EnableRetryOnFailure()
        ));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
