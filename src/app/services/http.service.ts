import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FirstService } from './first.service';
import { HttpClient } from '@angular/common/http';
import { CatFactType } from '../definitions/catfacts.definitions';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private readonly firstService: FirstService,
    private readonly http: HttpClient
  ) { 
  }


  getCatFact$(): Observable<CatFactType> {
    this.firstService.writeToConsole('Ez mégegy teszt')
    return this.http.get<CatFactType>('https://catfact.ninja/fact');
  }

  getData$(): Observable<any> {
    return this.http.get('https://api.nationalize.io?name=nathaniel');
  }
}
