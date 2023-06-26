import { Component } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  subject$ = this.firstService.message$;

  constructor(
    private readonly firstService: FirstService
  ) {}
}
