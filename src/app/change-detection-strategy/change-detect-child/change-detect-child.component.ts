import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detect-child',
  templateUrl: './change-detect-child.component.html',
  styleUrls: ['./change-detect-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //ChangeDetectionStrategy.Default
})
export class ChangeDetectChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  printSomething() {
    console.log('printSomething() called');

    return 'Hello change detection';
  }
}
