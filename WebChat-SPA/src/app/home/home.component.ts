import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private data: SignalRService) { }

  username: string;

  ngOnInit() {
  }

  enterWebChat() {
    this.data.submitName(this.username);
    this.router.navigate(['/chatroom']);
  }

}
