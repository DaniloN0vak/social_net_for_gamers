using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Tables;

namespace Social_network.Models.Data.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");


            builder.HasKey(x => x.Id);


            builder.Property(x => x.AvatarUrl)
                .HasMaxLength(255);

            builder.Property(x => x.Username)
                .HasMaxLength(64);

            builder.Property(x => x.Email)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.CreatedAt)
                .IsRequired();


            builder.Property(x => x.RoleId)
                .IsRequired();

            builder.Property(x => x.AccountId)
                .IsRequired();


            builder.HasIndex(x => x.Email)
                .IsUnique();



            builder.HasOne(x => x.Role)
                .WithMany(u => u.Users)
                .HasForeignKey(x => x.RoleId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Account)
                .WithMany(u => u.Users)
                .HasForeignKey(x => x.AccountId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
