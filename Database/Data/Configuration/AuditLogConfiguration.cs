using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Diplomwork.Database.Models;

namespace Diplomwork.Database.Data.Configuration
{
    public class AuditLogConfiguration : IEntityTypeConfiguration<AuditLog>
    {
        public void Configure(EntityTypeBuilder<AuditLog> builder)
        {
            builder.ToTable("AuditLogs");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Action)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(x => x.EntityId)
                .IsRequired();

            builder.Property(x => x.ActorId)
                .IsRequired();

            builder.Property(x => x.CreatedAt)
                .IsRequired();

            builder.HasOne(x => x.Entity)
                .WithMany(u => u.AuditLogs)
                .HasForeignKey(x => x.EntityId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Actor)
                .WithMany(u => u.AuditLogs)
                .HasForeignKey(x => x.ActorId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
