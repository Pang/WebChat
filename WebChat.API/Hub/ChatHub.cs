using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace WebChat.API.Hub
{
    public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
    {
        public async Task SendMessage(string user, string msg)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, msg);
        }
    }
}