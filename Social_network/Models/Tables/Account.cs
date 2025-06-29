namespace Social_network.Models.Tables
{
    public class Account
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string PasswordHash { get; set; }
        public virtual List<User> Users { get; set; }
    }
}
