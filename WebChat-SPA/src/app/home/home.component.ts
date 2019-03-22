import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private data: SignalRService) { }

  msgObj = {
    username: '',
    msgTxt: '',
    color: 'black'
  };

  ngOnInit() {
    this.data.username.subscribe(newName => this.msgObj.username = newName);
  }

  enterWebChat() {
    this.data.submitName(this.msgObj.username);
  }

}
