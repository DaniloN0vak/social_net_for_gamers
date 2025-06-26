namespace Social_network.Models
{
    public class PostTag
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public Post Post { get; set; }
        public long TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
