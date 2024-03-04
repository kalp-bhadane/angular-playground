import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSelectDropdownComponent } from './single-select-dropdown/single-select-dropdown.component';



@NgModule({
  declarations: [
    SingleSelectDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleSelectDropdownComponent
  ]
})
export class SharedModule { }
