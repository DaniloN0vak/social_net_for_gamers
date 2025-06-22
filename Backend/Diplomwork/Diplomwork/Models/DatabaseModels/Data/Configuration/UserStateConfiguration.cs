using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Diplomwork.Models.DatabaseModels.Tables;

namespace Diplomwork.Models.DatabaseModels.Data.Configuration
{
    public class UserStateConfiguration : IEntityTypeConfiguration<UserState>
    {
        public void Configure(EntityTypeBuilder<UserState> builder)
        {
            builder.ToTable("UserStates");

            builder.HasKey(x => x.Id);

            builder.HasIndex(x => x.Name)
                .IsUnique();
        }
    }
}
