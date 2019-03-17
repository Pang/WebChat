using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace signalRtest
{
    public class ChatHub : Hub
    {
        public Task SendMessage(string user, string message)
        {
            return Clients.All.SendAsync("receiveMessage", user, message);
        }
    }
}