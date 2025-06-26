namespace Social_network.Models
{
    public class UserSetting
    {
        public int Id { get; set; }
        public string? BackgroundUrl { get; set; }
        public bool DarkMode { get; set; }
        public string Language { get; set; }
        public bool NotificationsEnabled { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public UserSetting()
        {
            this.DarkMode = false;
            this.Language = "en";
            this.NotificationsEnabled = true;
        }
    }
}
