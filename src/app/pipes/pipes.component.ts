import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from './date-format.pipe';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [DateFormatPipe],
})
export class PipesComponent implements OnInit {
  drpdwnContent = {
    dataSource: [
      { label: 'DD-MM-YYYY', value: 'DD-MM-YYYY' },
      { label: 'MM-DD-YYYY', value: 'MM-DD-YYYY' },
      { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
    ],
    selectedValue: 'DD-MM-YYYY',
    width: 300,
    height: 40,
    id: 'date-format',
  };
  givenDate = new Date();

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onDateChange(event: any) {
    this.givenDate = event;
  }
}
