using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
    public async Task SendMessageToChat(string chatId, object message)
    {
        await Clients.Group(chatId).SendAsync("ReceiveMessage", message);
    }

    public override async Task OnConnectedAsync()
    {
        var chatId = Context.GetHttpContext()?.Request.Query["chatId"];

        if (!string.IsNullOrEmpty(chatId))
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, chatId);
        }

        await base.OnConnectedAsync();
    }

    public Task JoinChatGroup(string chatId)
    {
        return Groups.AddToGroupAsync(Context.ConnectionId, chatId);
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        var chatId = Context.GetHttpContext()?.Request.Query["chatId"];

        if (!string.IsNullOrEmpty(chatId))
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, chatId);
        }

        await base.OnDisconnectedAsync(exception);
    }
}
