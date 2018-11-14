import { SaleAModel } from './../models/SaleAModel';
import { Component, OnInit,Inject,ViewChild,ElementRef, Injectable } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
// import {DialogOverviewExampleDialog} from '../dialog/dialog-overview-example';
import { Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';
import {MatSort,Sort} from '@angular/material/sort';
import { Observable } from 'rxjs';
//for search
import { fromEvent } from 'rxjs'
// import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll,distinctUntilChanged, catchError, delay } from 'rxjs/operators';
import { SaleA } from '../models/SaleA';
import { SaleB } from '../models/SaleB';
import { SaleBModel } from '../models/SaleBModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploaderService } from '../Services/uploader.service';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import {Http,Response} from '@angular/http';
//for custom gridview
import { DataSource } from '@angular/cdk/collections';

import { BehaviorSubject, Subject } from 'rxjs';

import { TableElement } from './table-element';
import { ValidatorService } from './validator.service';
import { DefaultValidatorService } from './default-validator.service';
//for add row
import * as io from 'socket.io-client';
import { DialogOverviewExampleDialog } from '../pop-up-delete-chk/pop-up-delete-chk.component';
import { DialogOverviewExampleDialog2 } from '../pop-up-customer/pop-up-customer.component';
import { DialogOverviewExampleDialog3 } from '../pop-up-saleb/pop-up-saleb.component';
import * as myGlobals from './../global';
import { Globals } from './../global';
import { SaleFiles } from '../models/SaleFiles';
import { SaleBInSaleA } from '../models/SaleBInSaleA';
import { DomSanitizer } from '@angular/platform-browser';
import { SaleASerService } from '../Services/sale-aser.service';
// import {} from '@ng-bootstrap/ng-bootstrap';
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
let tmpgv;//=tt;
//for dialog
export interface DialogData {
  SaleNo :string;
  ItemNo :string;
  GoodsName :string;
  Qty :string;
  Price :string;
  Amount :string;
  rowline:string
}
//DialogData=new SaleB();
export class Comment {
  id: number;
  comment: string;
}
@Component({
  selector: 'app-salea',
  templateUrl: './salea.component.html',
  styleUrls: ['./salea.component.css']
})

export class SaleaComponent implements OnInit {//
  showMessage;
  message;
  @ViewChild(DialogOverviewExampleDialog)
  private popwindowSaleb:DialogOverviewExampleDialog;

  displayedColumns: string[] = ['select','SaleNo', 'ItemNo', 'GoodsName', 'Qty', 'Price','Amount'];
  //for add row test
  columnsToDisplay: string[] = this.displayedColumns.slice();
  //寄件人標題日期管理
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  selection = new SelectionModel<SaleB>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tt.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.tt.data.forEach(row => this.selection.select(row));
  }
  private handleError: HandleError;
  // message: string;
  tt = new MatTableDataSource<SaleB>();
  tmpgv=this.tt;
  dataSource: MatTableDataSource <SaleB> ;
  //for add row test
  socket = io();

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }
  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;

  //according login
  loginForm: FormGroup;

  popSalebForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    private uploaderService: UploaderService,private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient,public dialog: MatDialog) 
    {//
    }

    addRow(){
    const test:SaleB=new SaleB();
   let test1:Array<SaleB> ;//=new Array<SaleB>();
    test.SaleNo="";
    test.ItemNo="";
    test.GoodsName="";
    test.Qty="";
    test.Price="";
    test.Amount="";
test1=new Array<SaleB>();
test1.push(test);
      this.tt.data=this.tt.data.concat(test);
      this.loginForm.controls.TotalAmt.setValue(this.tt.data.length,{ onlySelf: false });
         }
    removeRow()
    {
      this.tt.data=this.tt.data.splice(0,this.tt.data.length-1);
    }
  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }

  uploadFile(event){
    //if (this.loginForm.valid) {
      let vFilePath: string;
     vFilePath="~/App_Data";
     let vFileName: string;
     //vFileName="";
    let vSaleNo: string;
    vSaleNo=this.loginForm.controls.SaleNo.value;
    if(event.files.length>0){
    let formData=new FormData();
    formData.append('file',event.files[0]);
    vFileName=event.files[0].name;
    //vSaleNo=this.loginForm.controls.SaleNo.value;
      if(vSaleNo!=""&&vFileName!=""&&vFilePath!="")
    this.httpClient.post(`http://localhost:51962/api/Upload/PostFormData?SaleNo=${vSaleNo}&filename=${vFileName}&filepath=${vFilePath}`,formData).subscribe(
      msg => {
        //input.value = null;
        this.message = msg;
      }
    );
    }
    //salefiles insert
    var user = { SaleNo: vSaleNo, FileName: vFileName ,FilePath:vFilePath};
    const baseUrl='http://localhost:51962/api/SaleFiles/PostSaleFiles';
    this.httpClient.post<SaleFiles[]>(baseUrl,user).subscribe(
      data=>{

      }
    );
  }
 
  onSubmit(event) {
  this.submitted = true;
  if (this.loginForm.valid) {
    let user:SaleBInSaleA=new SaleBInSaleA();
    let bb=new Array<SaleB>();
      user.SaleNo=this.loginForm.controls.SaleNo.value;
      user.SaleDate=this.loginForm.controls.SaleDate.value;
      user.CustomerNo=this.loginForm.controls.CustomerNo.value;
      user.DeAddress=this.loginForm.controls.DeAddress.value;
      user.PhoneNo=this.loginForm.controls.PhoneNo.value;
      user.TotalAmt=this.loginForm.controls.TotalAmt.value;
      for(let i=0;i<this.tt.data.length;i++)
      {
        let testb: SaleB =new SaleB( );
        testb.SaleNo=this.tt.data[i].SaleNo;//"tiger4";
        testb.ItemNo=this.tt.data[i].ItemNo;
        testb.GoodsName=this.tt.data[i].GoodsName;
        testb.Price=this.tt.data[i].Price;
        testb.Qty=this.tt.data[i].Qty;
        testb.Amount=this.tt.data[i].Amount;
        if(testb.SaleNo!=this.loginForm.controls.SaleNo.value)
        {
            //maybe do pop error msg window
        }
        else
        {
          bb.push(testb);
        user.Salebs=bb;//.push(testb);
        }
      }
    const baseUrla='http://localhost:51962/api/SaleA/PostSaleAClaaab';
    this.httpClient
    .post<any>(baseUrla,user,this.httpOptions).subscribe(data => {
      console.log(data);
    });
    (async () => { 
      // Do something before delay
      console.log('before delay')
  
      await delay(2000);
  
      // Do something after
      console.log('after delay')
  })();
    this.uploadFile(event);
  }
}
 ngOnInit() {
    this.tt.paginator = this.paginator;
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg.svg'));
 //for reactive form
 this.loginForm = this.formBuilder.group({
  SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
  SaleDate: ['', Validators.compose([Validators.required,Validators.maxLength(40)])],
  CustomerNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
  DeAddress: ['', Validators.compose([Validators.required,Validators.maxLength(125)])],
  PhoneNo: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
  TotalAmt: ['', Validators.compose([Validators.required,Validators.maxLength(30)])]
});

this.socket.on('newMsg',function(event)
{
  const data = this.dataSource.data;
  data.push(event);
  this.dataSource.data = data;
}
)
      //自訂篩選前端資料的邏輯
    this.tt.filterPredicate = (data: any, filter: string): boolean => {
      return data.title.indexOf(filter) !== -1;
    };

    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
  }
  ModifyRow(row:any)
  {
    var pos;
    //const pos;
    for(let i=0;i<this.tt.data.length;i++)
    {
      if(this.tt.data[i].SaleNo==row.SaleNo)
       pos=i;
    }
const rowno=row;
myGlobals.Globals.rowno=pos;
    const dialogRef3 = this.dialog.open(DialogOverviewExampleDialog3, {
      width: '250px',
      data: rowno
    });
    dialogRef3.beforeClose().subscribe(data=>{
      const test:SaleB=new SaleB();
      // let test1:Array<SaleB> ;//=new Array<SaleB>();
       test.SaleNo=dialogRef3.componentInstance.SaleNo;
       test.ItemNo=dialogRef3.componentInstance.ItemNo;
       test.GoodsName=dialogRef3.componentInstance.GoodsName;
       test.Qty=dialogRef3.componentInstance.Qty;
       test.Price=dialogRef3.componentInstance.Price;
       test.Amount=dialogRef3.componentInstance.Amount;
       //const no=dialogRef3.componentInstance.RowNo;
       const no=myGlobals.Globals.rowno;
         this.tt.data.map((todo, i) => {
           //update gv data
          if ((todo.SaleNo == test.SaleNo)&&todo.ItemNo==test.ItemNo&&todo.GoodsName==test.GoodsName)
          { //其實不用這麼多~只要SaleNo但先寫之後再拿掉
             this.tt.data[i] = test;
           } 
          //insert gv data
          if ((todo.SaleNo == '')&&test.SaleNo!='')
          { 
            this.tt.data[i] = test;
          }

          });
        this.tt.data=this.tt.data;
    })
    dialogRef3.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      const tf=this.popwindowSaleb.IfdeleteGV;
    });
  }
  ModifyRowDetail()
  {
    const test:SaleB=new SaleB();
    test.SaleNo=this.popSalebForm.controls.SaleNo.value;
    test.ItemNo=this.popSalebForm.controls.ItemNo.value;
    test.GoodsName=this.popSalebForm.controls.GoodsName.value;
    test.Qty=this.popSalebForm.controls.Qty.value;
    test.Price=this.popSalebForm.controls.Price.value;
    test.Amount=this.popSalebForm.controls.Amount.value;

  }
  DeleteRow(row:any)
  {
//step1:open dialog
//this.openDialog();
//step2:if return yes then delete else if return no then do nothing
const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  width: '250px',
  data: {name: this.name, animal: this.animal}
});
if(dialogRef.componentInstance.IfdeleteGV==false)
{
  tmpgv.data=null;
  
}
dialogRef.beforeClose().subscribe(data=>{
  if(dialogRef.componentInstance.IfdeleteGV==true)
  {
    // this.tt.data=null;
    //step3:delete row data
    var pos;
    for(let i=0;i<this.tt.data.length;i++)
    {
      if(this.tt.data[i].SaleNo==row.SaleNo)
       pos=i;
    }
    this.tt.data=this.tt.data.filter(order=>order.SaleNo!=this.tt.data[pos].SaleNo)
  }
  
})
dialogRef.afterClosed().subscribe(result => {
    const tf=this.popwindowSaleb.IfdeleteGV;
  console.log('The dialog was closed');
  this.animal = result;
});
  }
  Add()
  {

  }
  ModifyByKey()
  {

  }

  DeleteAll()
  {

    
  }
  Search()
  {

    //  this.log(`fetched hero id=${id}`)),
    const baseUrl=`http://localhost:51962/api/Salea/GetSaleA?SaleNo=${this.loginForm.controls.SaleNo.value}`;
    // let serva:SaleASerService;
    // serva.getHeroes();
    this.httpClient
      .get<SaleAModel>(baseUrl)
      .subscribe(data => {
         this.loginForm.setValue
         ({SaleNo:data[0].SaleNo,
         SaleDate:data[0].SaleDate,
         CustomerNo:data[0].CustomerNo,
         DeAddress:data[0].DeAddress,
         PhoneNo:data[0].PhoneNo,
         TotalAmt:data[0].TotalAmt
        });
      });
  }
  Update()
  {
    const  baseUrl='http://localhost:51962/api/Salea/PutSaleA?SiteNo=xx';
    var user = { SaleNo: "Tiger", SaleDate: "Liu" ,CustomerNo:"",DeAddress:"",PhoneNo:"",TotalAmt:""};
    user.SaleNo=this.loginForm.controls.SaleNo.value;
    user.SaleDate=this.loginForm.controls.SaleDate.value;
    user.CustomerNo=this.loginForm.controls.CustomerNo.value;
    user.DeAddress=this.loginForm.controls.DeAddress.value;
    user.PhoneNo=this.loginForm.controls.PhoneNo.value;
    user.TotalAmt=this.loginForm.controls.TotalAmt.value;
       this.httpClient.put<SaleBModel>(baseUrl,user, this.httpOptions)
       .subscribe(data => {
       });
  }
  Delete()
  {
    const baseUrl=`http://localhost:51962/api/Salea/DelSaleA?SaleNo=${this.loginForm.controls.SaleNo.value}&CustomerNo=${this.loginForm.controls.CustomerNo.value}`;
    this.httpClient
      .delete<SaleBModel>(baseUrl)
      .subscribe(data => {
      });
  }
//clear is to clear form
Clear()
{
this.loginForm.controls.SaleNo.invalid;
this.loginForm.controls.SaleDate.invalid;
this.loginForm.controls.CustomerNo.invalid;
this.loginForm.controls.DeAddress.invalid;
this.loginForm.controls.PhoneNo.invalid;
this.loginForm.controls.TotalAmt.invalid;

}
Submit()
{


}
applyFilter(filterValue: string) {
  this.tt.filter = filterValue.trim().toLowerCase();

  if (this.tt.paginator) {
    this.tt.paginator.firstPage();
  }
}
  getIssuees() 
  {
      const baseUrl='http://localhost:51962/api/Saleb/GetSaleBgv';
      this.httpClient
        .get<SaleBModel>(baseUrl)
        .subscribe(data => {
          this.tt.data = data.SaleBs;
        });
  }
  animal: string;
  name: string;

  openDialogSalea():void
  {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    if(dialogRef.componentInstance.IfdeleteGV==false)
    {
      tmpgv.data=null;
      
    }
    dialogRef.beforeClose().subscribe(data=>{
      if(dialogRef.componentInstance.IfdeleteGV==true)
      {
        this.tt.data=null;
      }
      
    })
    dialogRef.afterClosed().subscribe(result => {
        const tf=this.popwindowSaleb.IfdeleteGV;
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDialog2(): void {
    const dialogRef2 = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDialog3(): void {
    const dialogRef3 = this.dialog.open(DialogOverviewExampleDialog3, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    this.popSalebForm = this.formBuilder.group({
      SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      ItemNo: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
      GoodsName: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
      Qty: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      Price: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      Amount: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
    });
    dialogRef3.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  }

