import { Component, OnInit } from '@angular/core';
import { DateFormatPipe } from './date-format.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [DateFormatPipe]
})
export class PipesComponent implements OnInit {
  givenDate: string = '';
  showFormatedDate = false;
  dateFormatArr: any = [];

  constructor(private dateFormatPipe: DateFormatPipe) { }

  ngOnInit(): void {
    this.addDateFormatRow();
    // this.addDateFormatRow();
    // this.addDateFormatRow();
    // this.addDateFormatRow();
  }

  addDateFormatRow() {
    const dateFormat = {
      sourceDateFormatDrpdwn: this.getDrpdwnContent('sourceDateFormatDrpdwn_'+this.dateFormatArr.length+1),
      destinateDateFormatDrpdwn: this.getDrpdwnContent('destinateDateFormatDrpdwn'+this.dateFormatArr.length+1),
      givenDate: new Date(),
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

  onDateChange(event: any, dateFormatObj: any) {
    console.log(event, dateFormatObj);    
    dateFormatObj.givenDate = this.dateFormatPipe.transform(event, 'YYYY-MM-DD', dateFormatObj.destinateDateFormatDrpdwn.selectedValue)
  }
}
