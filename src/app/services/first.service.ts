import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FirstService {

  message$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }


  writeToConsole(message: string): void {
    console.log(`message ${message}:` ,message);
    
    this.message$.next(message);
  }
}
