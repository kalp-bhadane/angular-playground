import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, Observable, Subscription, take } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.subscription.add(
      interval(1000)
        .pipe(take(20))
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => {
            console.log(error);
          },
          complete: () => {
            console.log('interval completed');
          },
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
