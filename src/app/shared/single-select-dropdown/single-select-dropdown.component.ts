import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-select-dropdown',
  templateUrl: './single-select-dropdown.component.html',
  styleUrls: ['./single-select-dropdown.component.css']
})
export class SingleSelectDropdownComponent implements OnInit {
  @Input() content!: {
    id: string,
    dataSource: {label: string, value: any}[],
    selectedValue?: any,
    width?: number,
    height?: number
  };
  @Output() onSelection = new  EventEmitter<any>();

  ngOnInit(): void {
  }


  constructor() { }

  selectItem(item: any) {
    this.content.selectedValue = item.value;
    this.onSelection.emit(item);
  }

}
