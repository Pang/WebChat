import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  constructor(public hubConnection: signalR.HubConnection) { }

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5000/ChatHub')
        .build();

    this.hubConnection.start()
        .then(() => console.log('connection started'))
        .catch(err => alert('error connecting: ' + err));
  }


}
