namespace Diplomwork.Models.DTO
{
    public class MessageDto
    {
        public string Content { get; set; }
        public DateTime SentAt { get; set; }
        public bool IsEdited { get; set; }
        public List<MediumDto> Media { get; set; }
        public UserDto User { get; set; }
        public MessageDto() { Media = new List<MediumDto>(); }
    }
}
