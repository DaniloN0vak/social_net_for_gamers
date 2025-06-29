using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Tables;

namespace Social_network.Models.Data.Configuration
{
        public class AccountConfiguration : IEntityTypeConfiguration<Account>
        {
            public void Configure(EntityTypeBuilder<Account> builder)
            {
                builder.ToTable("Accounts");

                builder.HasKey(x => x.Id);

                builder.Property(x => x.Login)
                    .IsRequired()
                    .HasMaxLength(100);

                builder.Property(x => x.PasswordHash)
                    .IsRequired()
                    .HasMaxLength(255);

                builder.HasIndex(x => x.Login)
                    .IsUnique();
            }
        }
    
}
