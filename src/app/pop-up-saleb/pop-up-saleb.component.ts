import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { DialogData } from '../salea/salea.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as myGlobals from './../global';
import { Globals } from './../global';
@Component({
  selector: 'app-pop-up-saleb',
  templateUrl: './pop-up-saleb.component.html',
  styleUrls: ['./pop-up-saleb.component.css']
})
// @Component({
//   selector: 'dialog-overview-example-dialog3',
//   templateUrl: 'popUpSaleb.html',
// })
export class DialogOverviewExampleDialog3 implements OnInit{
  @Input() rowdata:any;
  @Output() RowNo:string;
  @Output() SaleNo:string;
  @Output() ItemNo:string;
  @Output() GoodsName:string;
  @Output() Qty:string;
  @Output() Price:string;
  @Output() Amount:string;
@Output() notify:EventEmitter<string>=new EventEmitter<string>();
  popSalebForm: FormGroup;
  receivedata:any;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef3: MatDialogRef<DialogOverviewExampleDialog3>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dia:MatDialogModule) 
    {
      this.receivedata=data;
      this.RowNo=data.rowline;
    //   this.popSalebForm = this.formBuilder.group({
    //     SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
    //     ItemNo: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
    //     GoodsName: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
    //     Qty: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
    //     Price: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
    //     Amount: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
    // })
  }
  
    ngOnInit() 
    {

      this.popSalebForm = this.formBuilder.group({
        SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
        ItemNo: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
        GoodsName: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
        Qty: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
        Price: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
        Amount: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
      });
       this.popSalebForm.patchValue({
      SaleNo:this.receivedata.SaleNo,
      ItemNo:this.receivedata.ItemNo,
      GoodsName:this.receivedata.GoodsName,
      Qty:this.receivedata.Qty,
      Price:this.receivedata.Price,
      Amount:this.receivedata.Amount
      });
    }

  onNoClick(): void {
    this.popSalebForm = this.formBuilder.group({
      SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      ItemNo: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
      GoodsName: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
      Qty: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      Price: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      Amount: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
    });
    this.dialogRef3.close();
  }
  ModifyRowDetail()
  {

    this.SaleNo=this.popSalebForm.controls.SaleNo.value;
    this.ItemNo=this.popSalebForm.controls.ItemNo.value;
    this.GoodsName=this.popSalebForm.controls.GoodsName.value;
    this.Qty=this.popSalebForm.controls.Qty.value;
    this.Price=this.popSalebForm.controls.Price.value;
    this.Amount=this.popSalebForm.controls.Amount.value;
    // this.SaleNo=this.SaleNo;
    // this.ItemNo=this.receivedata.ItemNo,
    // this.GoodsName=this.receivedata.GoodsName,
    // this.Qty=this.receivedata.Qty,
    // this.Price=this.receivedata.Price,
    // this.Amount=this.receivedata.Amount
    this.dialogRef3.close();

  }
}
