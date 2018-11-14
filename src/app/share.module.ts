import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatNativeDateModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatPaginatorModule,MatSortModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {JumpwindowModule} from './jumpwindow/jumpwindow.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule,MatNativeDateModule, JumpwindowModule,MatSortModule,MatCheckboxModule,MatPaginatorModule,MatProgressSpinnerModule,MatFormFieldModule,MatDialogModule,MatButtonModule,MatListModule,MatSidenavModule,MatIconModule,MatButtonToggleModule,MatRippleModule,MatSidenavModule,MatToolbarModule,MatTableModule,MatListModule,MatInputModule,MatGridListModule,MatDatepickerModule], // 先import
  exports: [BrowserAnimationsModule,MatNativeDateModule,JumpwindowModule,MatSortModule,MatCheckboxModule,MatPaginatorModule,MatProgressSpinnerModule,MatFormFieldModule,MatDialogModule,MatButtonModule,MatListModule,MatSidenavModule,MatIconModule,MatButtonToggleModule,MatRippleModule,MatSidenavModule,MatToolbarModule,MatTableModule,MatListModule,MatInputModule,MatGridListModule,MatDatepickerModule] // 在export
})
export class SharedMaterialModule {}