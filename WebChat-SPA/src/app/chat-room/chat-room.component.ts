import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  ngOnInit() {
    let connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/ChatHub')
      .build();

    connection.on('send', data => {
        console.log(data);
    });

    connection.start()
      .then(() => console.log('connection started'))
      .catch(err => alert('error connecting: ' + err));
  }

}
