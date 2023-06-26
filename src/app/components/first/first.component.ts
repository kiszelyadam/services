import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';
import { HttpService } from 'src/app/services/http.service';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  cats$ = this.httpService.getCatFact$().pipe(
    tap((data) => console.log('ide2'))
  );

  data$ = this.httpService.getData$();

  constructor(
    private readonly httpService: HttpService
  ) {}
}
