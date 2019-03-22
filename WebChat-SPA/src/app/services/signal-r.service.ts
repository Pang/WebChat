import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
