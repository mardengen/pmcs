import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../salea/salea.component';

@Component({
  selector: 'app-pop-up-customer',
  templateUrl: './pop-up-customer.component.html',
  styleUrls: ['./pop-up-customer.component.css']
})
// @Component({
//   selector: 'dialog-overview-example-dialog2',
//   templateUrl: 'popUpCustomer.html',
// })
export class DialogOverviewExampleDialog2 {

  constructor(
    public dialogRef2: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dia:MatDialogModule) {}

  onNoClick(): void {
    this.dialogRef2.close();
  }

}
