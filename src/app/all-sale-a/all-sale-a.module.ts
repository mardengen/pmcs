import { SaleA } from './../models/SaleA';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {DialogOverviewExampleDialog,DialogOverviewExampleDialog2,DialogOverviewExampleDialog3} from './salea.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AllSaleAComponent} from '../all-sale-a/all-sale-a.component';
import { MatPaginatorModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,MatDialogModule,MatPaginatorModule
  ],
  declarations: [],
  entryComponents: [ AllSaleAComponent]
  
})
export class AllSaleAModule { }
