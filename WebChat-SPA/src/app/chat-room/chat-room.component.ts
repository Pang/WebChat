import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private data: SignalRService) {}

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
    this.data.username.subscribe(newName => this.msgObj.username = newName);

    this.connection.on('ReceiveMessage', (user, message, userColor) => {
      this.messages.push({username: user, msgTxt: message, color: userColor});
    });

    this.connection.start()
      .then(() => console.log('connection started'))
      .catch(err => alert('error connecting: ' + err));
  }

  onSend() {
    this.connection.invoke('SendMessage', this.msgObj.username, this.msgObj.msgTxt, this.msgObj.color)
      .catch((err) => {
        return console.error(err.toString());
      });
    this.msgObj.msgTxt = ' ';
  }


}
