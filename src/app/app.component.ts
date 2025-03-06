import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  count = 1;
  constructor(private appService: AppService) {}

  ngOnInit() {}
  ngOnDestroy(): void {}
}
