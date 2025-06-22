using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Diplomwork.Models.DatabaseModels.Tables;

namespace Diplomwork.Models.DatabaseModels.Data.Configuration
{
    public class ChatUserConfiguration : IEntityTypeConfiguration<ChatUser>
    {
        public void Configure(EntityTypeBuilder<ChatUser> builder)
        {
            builder.ToTable("ChatUsers");

            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.User)
                .WithMany(u => u.ChatUsers)
                .HasForeignKey(u => u.UserId);

            builder.HasOne(x => x.Chat)
                .WithMany(u => u.ChatUsers)
                .HasForeignKey(u => u.ChatId);
        }
    }
}
