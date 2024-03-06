import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  givenDate: string = '';
  showFormatedDate = false;
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
      sourceDateFormatDrpdwn: this.getDrpdwnContent('sourceDateFormatDrpdwn_'+this.dateFormatArr.length+1),
      destinateDateFormatDrpdwn: this.getDrpdwnContent('destinateDateFormatDrpdwn'+this.dateFormatArr.length+1),
      givenDate: '',
      showFormatedDate: false,
      id: this.dateFormatArr.length + 1
    }
    this.dateFormatArr.push(dateFormat);
  }

  getDrpdwnContent(id: string) {
    return {
      dataSource: [
        { label: 'DD-MM-YYYY', value: 'DD-MM-YYYY' },
        { label: 'MM-DD-YYYY', value: 'MM-DD-YYYY' },
        { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' }
      ],
      selectedValue: 'DD-MM-YYYY',
      width: 300,
      height: 40,
      id: id
    }
  }
}
