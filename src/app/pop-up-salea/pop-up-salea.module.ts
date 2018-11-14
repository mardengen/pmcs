import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewExampleDialog4 } from './pop-up-salea.component';
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
export class PopUpSaleaModule { }
