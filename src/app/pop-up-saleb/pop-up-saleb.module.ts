import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewExampleDialog3 } from './pop-up-saleb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
exports:[CommonModule,
  FormsModule,ReactiveFormsModule]
})
export class PopUpSalebModule { }
