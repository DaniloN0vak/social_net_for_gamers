using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Diplomwork.Models.DatabaseModels.Tables;
using Authorization.Models.DatabaseModels.Tables;

namespace Diplomwork.Models.DatabaseModels.Data.Configuration
{
    public class BackgroundImageConfiguration : IEntityTypeConfiguration<BackgroundImage>
    {
        public void Configure(EntityTypeBuilder<BackgroundImage> builder)
        {
            builder.ToTable("BackgroundImages");

            builder.HasKey(x => x.Id);
        }
    }
}
