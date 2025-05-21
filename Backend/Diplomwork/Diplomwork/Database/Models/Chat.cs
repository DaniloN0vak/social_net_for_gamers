namespace Diplomwork.Database.Models
{
    public class Chat
    {
        public long Id { get; set; }
        public bool IsGroup {  get; set; }
        public string? Name { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? AvatarUrl {  get; set; }
        public string? BackgroundUrl {  get; set; }
        public int? CreatorId { get; set; }
        public User? Creator { get; set; }
        public virtual List<Message> Messages { get; set; }
        public Chat()
        {
            this.CreatedAt = DateTime.Now;
            this.Messages = new List<Message>();
        }
    }
}
