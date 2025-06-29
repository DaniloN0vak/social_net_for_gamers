﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Tables;

namespace Social_network.Models.Data.Configuration
{
    public class UserAchievementConfiguration : IEntityTypeConfiguration<UserAchievement>
    {
        public void Configure(EntityTypeBuilder<UserAchievement> builder)
        {
            builder.ToTable("UserAchievement");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.AchievementId)
                .IsRequired();

            builder.Property(x => x.UserId)
                .IsRequired();

            builder.Property(x => x.AchievedAt)
                .IsRequired();

            builder.HasOne(x => x.User)
                .WithMany(u => u.UserAchievements)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Achievement)
                .WithMany(u => u.UserAchievements)
                .HasForeignKey(x => x.AchievementId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
