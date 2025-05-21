namespace Diplomwork.Database.Models
{
    public class Community
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public string AvatarUrl { get; set; }
        public string BunnerUrl { get; set; }
        public int CreatorId { get; set; }
        public User Creator { get; set; }
        public virtual List<Post> Posts { get; set; }
        public virtual List<Notification> Notifications { get; set; }
        public Community()
        {
            this.CreatedAt = DateTime.Now;
            this.Posts = new List<Post>();
            this.Notifications = new List<Notification>();
        }
    }
}
