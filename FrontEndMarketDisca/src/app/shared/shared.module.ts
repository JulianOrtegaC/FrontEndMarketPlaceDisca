import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';




















@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [ CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
