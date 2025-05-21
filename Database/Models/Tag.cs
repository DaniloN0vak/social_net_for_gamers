namespace Diplomwork.Database.Models
{
    public class Tag
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public virtual List<PostTag> PostTags { get; set; }
        public Tag()
        {
            this.PostTags = new List<PostTag>();
        }
    }
}
