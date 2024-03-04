import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  givenDate: string = '';
  showFormatedDate = false;
  dateFormatDrpdwnContent = {
    dataSource: [
      { label: 'DD-MM-YYYY', value: 'DD-MM-YYYY' },
      { label: 'MM-DD-YYYY', value: 'MM-DD-YYYY' },
      { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' }
    ],
    width: 300,
    height: 40
  }

  dateFormatArr: any = [];

  constructor() { }

  ngOnInit(): void {
    this.addDateFormatRow();
    this.addDateFormatRow();
    this.addDateFormatRow();
    this.addDateFormatRow();
  }

  addDateFormatRow() {
    const dateFormat = {
      sourceDateFormatDrpdwn: this.dateFormatDrpdwnContent,
      destinateDateFormatDrpdwn: this.dateFormatDrpdwnContent,
      givenDate: '',
      showFormatedDate: false
    }
    this.dateFormatArr.push(dateFormat);
  }
}
