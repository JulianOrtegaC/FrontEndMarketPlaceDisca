import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';














@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatPaginatorModule,
    MatNativeDateModule ,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    DatepickerModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [ CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatPaginatorModule,
    MatNativeDateModule ,
    MatIconModule,
    DatepickerModule,
    MatTableModule,
    MatSelectModule
  ],
})
export class SharedModule { }
