import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HubConnection } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  constructor() { }

  private name = new BehaviorSubject<string>('');
  username = this.name.asObservable();

  submitName(inputName: string) {
    this.name.next(inputName);
  }

}
