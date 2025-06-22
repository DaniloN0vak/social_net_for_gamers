using Diplomwork.Models.DatabaseModels.Tables;

namespace Diplomwork.Models.DTO
{
    public class ChatDto
    {
        public long Id { get; set; }
        public List<MessageDto> Messages { get; set; }
        public List<UserDto> Companions { get; set; }
        public bool IsGroup { get; set; }
        public string? Name { get; set; }
        public string? AvatarUrl { get; set; }
        public ChatDto()
        {
            Messages = new List<MessageDto>();
            Companions = new List<UserDto>();
        }
    }
}
