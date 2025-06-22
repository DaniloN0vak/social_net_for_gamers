using Diplomwork.Models.DatabaseModels.Data;
using Diplomwork.Models.DatabaseModels.Tables;
using Diplomwork.Models.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Diplomwork.Models
{
    public class ChatService
    {
        private readonly AppDbContext _context;
        public ChatService(AppDbContext context)
        {
            _context = context;
        }

        private async Task<Chat?> GetChatById(long id)
        {
            return await _context.Chats
                .AsSplitQuery()
                .Include(c => c.Messages)
                    .ThenInclude(x => x.Media)
                .Include(c => c.Messages)
                    .ThenInclude(x => x.Sender)
                .Include(c => c.ChatUsers)
                    .ThenInclude(x => x.User)
                        .ThenInclude(x => x.UserState)
                .Include(c => c.ChatUsers)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        private async Task<List<Chat>> GetChatsByUserId(int userId)
        {
            return await _context.Chats
                .Include(c => c.ChatUsers)
                .Where(chat => chat.ChatUsers.Any(cu => cu.UserId == userId))
                .ToListAsync();
        }

        public async Task<List<ChatDto>> GetChats(int userId)
        {
            List<ChatDto> chatDtos = new List<ChatDto>();
            List<Chat> chats = await GetChatsByUserId(userId);
            foreach (Chat chat in chats)
            {
                chatDtos.Add(new ChatDto()
                {
                    Id = chat.Id,
                    AvatarUrl = chat.AvatarUrl,
                    Name = chat.Name
                });
            }
            return chatDtos;
        }

        public async Task SaveMessage(string content, int chatId, int userId, List<MediumDto> mediaDtos)
        {
            try
            {
                var message = new Message
                {
                    ChatId = chatId,
                    Content = content,
                    IsDeleted = false,
                    IsRead = false,
                    IsEdited = false,
                    SenderId = userId,
                    SentAt = DateTime.UtcNow
                };

                _context.Messages.Add(message);
                await _context.SaveChangesAsync();

                long messageId = message.Id;
                if (mediaDtos.Count > 0)
                {
                    var mediaEntities = mediaDtos.Select(m => new Medium
                    {
                        MessageId = messageId,
                        Name = m.Name,
                        Type = m.Type,
                        Url = m.Src,
                        IsBloored = m.IsBloored
                    }).ToList();

                    Console.WriteLine(mediaDtos.Count);
                    Console.WriteLine(mediaDtos[0].Src);

                    _context.Media.AddRange(mediaEntities);
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Ошибка при сохранении сообщения с медиа", ex);
            }
        }


        public async Task<ChatDto?> ChatToSend(long chatId)
        {
            Chat? chat = await GetChatById(chatId);

            if (chat == null) { return null; }

            ChatDto chatDto = new ChatDto();

            chatDto.AvatarUrl = chat.AvatarUrl;
            chatDto.Name = chat.Name;
            chatDto.IsGroup = chat.IsGroup;

            List<User> users = _context.Users.Include(u => u.ChatUsers).Where(u => u.ChatUsers.Any(cu => cu.ChatId == chat.Id)).ToList();
            foreach (var user in users)
            {
                chatDto.Companions.Add(new UserDto()
                {
                    Avatar = user.AvatarUrl,
                    FirstName = user.AvatarUrl,
                    LastName = user.Lastname,
                    Id = user.Id
                });
            }



            foreach (var msg in chat.Messages)
            {
                List<MediumDto> media = new List<MediumDto>();
                foreach (var medium in msg.Media)
                {
                    media.Add(new MediumDto() { Id = medium.Id, IsBloored = medium.IsBloored, Name = medium.Name, Src = medium.Url, Type = medium.Type });
                }
                chatDto.Messages.Add(new MessageDto()
                {
                    Content = msg.Content,
                    IsEdited = msg.IsEdited,
                    Media = media,
                    SentAt = msg.SentAt,
                    User = new UserDto()
                    {
                        Id = msg.SenderId,
                        Avatar = msg.Sender.AvatarUrl,
                        FirstName = msg.Sender.Firstname,
                        LastName = msg.Sender.Lastname
                    }
                });
            }

            return chatDto;
        }
    }
}
