import { SaleaComponent } from './../salea/salea.component';
import { Component, OnInit, Inject, Output,EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../salea/salea.component';

@Component({
  selector: 'appdeletechk',
  // templateUrl: './pop-up-delete-chk.component.html',
  styleUrls: ['./pop-up-delete-chk.component.css'],
  template: `<div>
              <form id="form1">
                <div>
                  <label>確定刪除?</label>
                  <input type="button" ID="btnAdd"  value="Yes" (click)="onYesClick()" />
                  <input type="button" ID="btnModify"  value="No" (click)="onNoClick()" />
                </div>
              </form>
              
            </div>`
})
// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'popUpDeleteChk.html',
// })
export class DialogOverviewExampleDialog {
  @Output()
  public IfdeleteGV: boolean;
  // public get IfdeleteGV(): boolean {
  //   return this._IfdeleteGV;
  // }
  // public set IfdeleteGV(value: boolean) {
  //   this._IfdeleteGV = value;
  // }
@Output() notify:EventEmitter<string>=new EventEmitter<string>();
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dia:MatDialogModule) {}
onYesClick():void//MatDialogRef<DialogOverviewExampleDialog>
{
  this.IfdeleteGV=true;
  this.notify.emit(this.IfdeleteGV.toString());
  
  // return this.dialogRef;
  this.dialogRef.close();
  //this.tt.data=null;
}
  onNoClick(): void {
    this.IfdeleteGV=false ;
    this.dialogRef.close();
  }



} 
