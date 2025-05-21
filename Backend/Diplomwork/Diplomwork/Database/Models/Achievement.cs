namespace Diplomwork.Database.Models
{
    public class Achievement
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? IconUrl {  get; set; }
        public virtual List<UserAchievement> UserAchievements { get; set; }
        public Achievement()
        {
            this.UserAchievements = new List<UserAchievement>();
        }
    }
}
