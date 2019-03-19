using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WebChat.API.Hub
{
    public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
    {
        public async Task SendMessage(string user, string message, string userColor)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, userColor);
        }
    }
}