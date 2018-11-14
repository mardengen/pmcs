import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { DialogData } from '../salea/salea.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as myGlobals from './../global';
import { Globals } from './../global';
@Component({
  selector: 'app-pop-up-salea',
  templateUrl: './pop-up-salea.component.html',
  styleUrls: ['./pop-up-salea.component.css']
})
// @Component({
//   selector: 'dialog-overview-example-dialog3',
//   templateUrl: 'popUpSaleb.html',
// })
export class  DialogOverviewExampleDialog4 implements OnInit{
  @Input() rowdata:any;
  @Output() RowNo:string;
  // @Output() SaleNo:string;
  // @Output() SaleDate:string;
  // @Output() CustomerNo:string;
  // @Output() DeAddress:string;
  // @Output() PhoneNo:string;
  // @Output() TotalAmt:string;
@Output() notify:EventEmitter<string>=new EventEmitter<string>();
@Output()popSaleaForm: FormGroup;
  receivedata:any;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef3: MatDialogRef<DialogOverviewExampleDialog4>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dia:MatDialogModule) 
    {
      this.receivedata=data;
      this.RowNo=data.rowline;
    //   this.popSaleaForm = this.formBuilder.group({
    //     SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
    //     SaleDate: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
    //     CustomerNo: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
    //     DeAddress: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
    //     PhoneNo: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
    //     TotalAmt: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
    // })
  }
  
    ngOnInit() 
    {

      this.popSaleaForm = this.formBuilder.group({
        SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
        SaleDate: ['', Validators.compose([Validators.required,Validators.maxLength(25)])],
        CustomerNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
        DeAddress: ['', Validators.compose([Validators.required,Validators.maxLength(125)])],
        PhoneNo: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
        TotalAmt: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
      });
       this.popSaleaForm.patchValue({//setValue
      SaleNo:this.receivedata.SaleNo,
      SaleDate:this.receivedata.SaleDate,
      CustomerNo:this.receivedata.CustomerNo,
      DeAddress:this.receivedata.DeAddress,
      PhoneNo:this.receivedata.PhoneNo,
      TotalAmt:this.receivedata.TotalAmt
      });
    }

  onNoClick(): void {
    this.popSaleaForm = this.formBuilder.group({
      SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      SaleDate: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
      CustomerNo: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
      DeAddress: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      PhoneNo: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      TotalAmt: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
    });
    this.dialogRef3.close();
  }
  ModifyRowDetail()
  {

    // this.SaleNo=this.popSaleaForm.controls.SaleNo.value;
    // this.SaleDate=this.popSaleaForm.controls.SaleDate.value;
    // this.CustomerNo=this.popSaleaForm.controls.CustomerNo.value;
    // this.DeAddress=this.popSaleaForm.controls.DeAddress.value;
    // this.PhoneNo=this.popSaleaForm.controls.PhoneNo.value;
    // this.TotalAmt=this.popSaleaForm.controls.TotalAmt.value;
    
    // form.patchValue({first: 'Nancy'});
    this.popSaleaForm.patchValue({
      SaleNo:this.popSaleaForm.controls.SaleNo.value,
      SaleDate:this.popSaleaForm.controls.SaleDate.value,
      CustomerNo:this.popSaleaForm.controls.CustomerNo.value,
      DeAddress:this.popSaleaForm.controls.DeAddress.value,
      PhoneNo:this.popSaleaForm.controls.PhoneNo.value,
      TotalAmt:this.popSaleaForm.controls.TotalAmt.value
      });
    // this.SaleNo=this.SaleNo;
    // this.SaleDate=this.receivedata.SaleDate,
    // this.CustomerNo=this.receivedata.CustomerNo,
    // this.DeAddress=this.receivedata.DeAddress,
    // this.PhoneNo=this.receivedata.PhoneNo,
    // this.TotalAmt=this.receivedata.TotalAmt
    this.dialogRef3.close();

  }
}
