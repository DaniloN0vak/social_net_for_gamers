using Microsoft.Extensions.Hosting;
using System.Data;
using System.Security.Cryptography.Xml;
using System;
using System.Security.Principal;

namespace Social_network.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string? AvatarUrl { get; set; }
        public string? Bio { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public short RoleId { get; set; }
        public Role Role { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public virtual List<VideoStream> VideoStreams { get; set; }
        public virtual List<Community> Communities { get; set; }
        public virtual List<Post> Posts { get; set; }
        public virtual List<Chat> Chats { get; set; }
        public virtual List<Message> Messages { get; set; }
        public virtual List<Order> Orders { get; set; }
        public virtual List<Item> Items { get; set; }
        public virtual List<Clip> Clips { get; set; }
        public virtual List<Report> MyReports { get; set; }
        public virtual List<Report> ReportsAgainst { get; set; }
        public virtual List<UserSetting> UserSettings { get; set; }
        public virtual List<Notification> AuthorNotifications { get; set; }
        public virtual List<Notification> ReferenceNotifications { get; set; }
        public virtual List<AuditLog> AuditLogs { get; set; }
        public virtual List<UserAchievement> UserAchievements { get; set; }
        public virtual List<Payment> Payments { get; set; }
        public virtual List<Transfer> SentTransfers { get; set; }
        public virtual List<Transfer> AcceptedTransfers { get; set; }

        public User()
        {
            this.UpdatedAt = DateTime.Now;
            this.CreatedAt = DateTime.Now;
            this.VideoStreams = new List<VideoStream>();
            this.Communities = new List<Community>();
            this.Posts = new List<Post>();
            this.Chats = new List<Chat>();
            this.Messages = new List<Message>();
            this.Items = new List<Item>();
            this.Clips = new List<Clip>();
            this.MyReports = new List<Report>();
            this.ReportsAgainst = new List<Report>();
            this.UserSettings = new List<UserSetting>();
            this.AuthorNotifications = new List<Notification>();
            this.AuditLogs = new List<AuditLog>();
            this.UserAchievements = new List<UserAchievement>();
            this.Payments = new List<Payment>();
            this.SentTransfers = new List<Transfer>();
            this.AcceptedTransfers = new List<Transfer>();
        }
    }
}
