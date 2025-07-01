namespace Social_network.Models.Tables
{
    public class PostMedia
    {
        public int Id { get; set; }
        public string Url { get; set; } = string.Empty;
        public string Type { get; set; } = "image"; 
        public double Size { get; set; }
        public int PostId { get; set; }
        public Post Post { get; set; } = null!;
    }
}
