namespace Authorization.Models.RequestModels
{
    public class NewPasswordRequest
    {
        public string Token {  get; set; }
        public string Password { get; set; }
    }
}
