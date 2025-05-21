namespace Diplomwork.Database.Models
{
    public class NotificationType
    {
        public short Id { get; set; }
        public string Name { get; set; }
        public virtual List<Notification> Notifications { get; set; }
        public NotificationType()
        {
            this.Notifications = new List<Notification>();
        }
    }
}
