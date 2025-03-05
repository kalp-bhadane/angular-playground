import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css'],
})
export class ChangeDetectionStrategyComponent implements OnInit {
  counter = 0;
  constructor(private changeDetectRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onIncrementCounter() {
    this.counter++;
  }
}
