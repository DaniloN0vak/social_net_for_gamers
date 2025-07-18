﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Tables;

namespace Social_network.Models.Data.Configuration
{
    public class PostTagConfiguration : IEntityTypeConfiguration<PostTag>
    {
        public void Configure(EntityTypeBuilder<PostTag> builder)
        {
            builder.ToTable("PostTags");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.PostId)
                .IsRequired();

            builder.Property(x => x.TagId)
                .IsRequired();

            builder.HasOne(x => x.Post)
                .WithMany(u => u.PostTags)
                .HasForeignKey(x => x.PostId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Tag)
                .WithMany(u => u.PostTags)
                .HasForeignKey(x => x.TagId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
