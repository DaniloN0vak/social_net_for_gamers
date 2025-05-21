using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Diplomwork.Database.Models;

namespace Diplomwork.Database.Data.Configuration
{
    public class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.ToTable("Posts");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Content)
                .IsRequired();

            builder.Property(x => x.ImageUrl)
                .HasMaxLength(255);

            builder.Property(x => x.Language)
                .HasMaxLength(10);

            builder.Property(x => x.IsCommunityPost)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(x => x.CreatedAt)
                .IsRequired();

            builder.HasOne(x => x.AuthorUser)
                .WithMany(u => u.Posts)
                .HasForeignKey(x => x.AuthorUserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.AuthorCommunity)
                .WithMany(u => u.Posts)
                .HasForeignKey(x => x.AuthorCommunityId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.ReplyToPost)
                .WithMany(u => u.Posts)
                .HasForeignKey(x => x.ReplyToPostId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
