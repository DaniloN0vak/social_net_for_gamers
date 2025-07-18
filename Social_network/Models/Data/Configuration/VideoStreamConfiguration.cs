﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Tables;

namespace Social_network.Models.Data.Configuration
{
    public class VideoStreamConfiguration : IEntityTypeConfiguration<VideoStream>
    {
        public void Configure(EntityTypeBuilder<VideoStream> builder)
        {
            builder.ToTable("VideoStreams");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(x => x.StartedAt)
                .IsRequired();

            builder.Property(x => x.StreamerId)
                .IsRequired();

            builder.Property(x => x.IsLive)
                .HasDefaultValue(0);

            builder.HasOne(x => x.Streamer)
                .WithMany(u => u.VideoStreams)
                .HasForeignKey(x => x.StreamerId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
