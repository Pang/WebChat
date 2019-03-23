import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  constructor() { }

  private name = new BehaviorSubject<string>('');
  private color = new BehaviorSubject<string>('');
  username = this.name.asObservable();
  userColor = this.color.asObservable();

  submitName(inputName: string, inputColor: string) {
    this.name.next(inputName);
    this.color.next(inputColor);
  }
}
