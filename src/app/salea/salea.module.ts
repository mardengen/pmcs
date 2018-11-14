import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {DialogOverviewExampleDialog,DialogOverviewExampleDialog2,DialogOverviewExampleDialog3} from './salea.component';
import {MatDialogModule} from '@angular/material/dialog';
import {SaleaComponent} from './salea.component';
import { MatPaginatorModule } from '@angular/material';
import { UploaderService } from '../Services/uploader.service';
// import { DialogOverviewExampleDialog } from '../pop-up-delete-chk/pop-up-delete-chk.component';
// import { DialogOverviewExampleDialog2 } from '../pop-up-customer/pop-up-customer.component';
 import { DialogOverviewExampleDialog3 } from '../pop-up-saleb/pop-up-saleb.component';
import { PopUpSalebModule } from '../pop-up-saleb/pop-up-saleb.module';
import { Globals } from '../global';
import { PopUpDeleteChkModule } from '../pop-up-delete-chk/pop-up-delete-chk.module';
import { DialogOverviewExampleDialog } from '../pop-up-delete-chk/pop-up-delete-chk.component';
import { DialogOverviewExampleDialog4 } from '../pop-up-salea/pop-up-salea.component';

@NgModule({
  imports: [
    
    CommonModule,MatDialogModule,MatPaginatorModule,PopUpSalebModule,PopUpDeleteChkModule
  ],
  declarations: [DialogOverviewExampleDialog3,DialogOverviewExampleDialog,DialogOverviewExampleDialog4],
  entryComponents: [ SaleaComponent,DialogOverviewExampleDialog3,DialogOverviewExampleDialog,DialogOverviewExampleDialog4]
  ,providers:[UploaderService,Globals]
})
export class SaleaModule { }
