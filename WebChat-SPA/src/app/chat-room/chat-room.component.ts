import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  username: string;
  messageInput: string;
  messages = [];
  msgObj = {
    username: '',
    msgTxt: '',
    color: 'black'
  };
  connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/ChatHub')
      .build();

  ngOnInit() {
    this.connection.on('ReceiveMessage', (user, message) => {
      this.messages.push({username: user, msgTxt: message});
    });

    this.connection.start()
      .then(() => console.log('connection started'))
      .catch(err => alert('error connecting: ' + err));
  }

  onSend() {
    this.connection.invoke('SendMessage', this.msgObj.username, this.msgObj.msgTxt)
      .catch((err) => {
        return console.error(err.toString());
      });
  }


}
