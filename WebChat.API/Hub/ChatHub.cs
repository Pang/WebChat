using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WebChat.API.Hub
{
    public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
    {
        public Task SendMessage(string user, string message)
        {
            return Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}