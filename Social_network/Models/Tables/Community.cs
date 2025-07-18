﻿using Microsoft.Extensions.Hosting;

namespace Social_network.Models.Tables
{
    public class Community //задіяне в Сторінках (не плутати з Спільнотами!)
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
        public string Slug { get; set; } 
        public Community()
        {
            CreatedAt = DateTime.Now;
            Posts = new List<Post>();
            Notifications = new List<Notification>();
        }
    }
}
