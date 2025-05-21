using static System.Net.Mime.MediaTypeNames;

namespace Diplomwork.Database.Models
{
    public class Message
    {
        public long Id { get; set; }
        public string Content {  get; set; }
        public DateTime SentAt { get; set; }
        public bool IsEdited {  get; set; }
        public bool IsDeleted { get; set; }
        public bool IsRead {  get; set; }
        public int SenderId {  get; set; }
        public User Sender { get; set; }
        public long? ReplyToMessageId {  get; set; }
        public Message? ReplyToMessage { get; set; }
        public long ChatId {  get; set; }
        public Chat Chat { get; set; }  
        public virtual List<Message> Messages { get; set; }
        public virtual List<Image> Images { get; set; }
        public Message()
        {
            this.SentAt = DateTime.Now;
            this.IsEdited = false;
            this.IsDeleted = false;
            this.IsRead = false;
            this.Messages = new List<Message>();
            this.Images = new List<Image>();
        }
    }
}
