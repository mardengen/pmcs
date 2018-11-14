import { SaleBModel } from './../models/SaleBModel';
import { Component, OnInit,Inject,ViewChild,ElementRef } from '@angular/core';
import {MatTableDataSource, MatDialogRef, MatDialogModule,MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
// import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';
import {MatSort,Sort} from '@angular/material/sort';
import { Observable } from 'rxjs';
import { SaleB } from '../models/SaleB';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//for dialog
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-saleb',
  templateUrl: './saleb.component.html',
  styleUrls: ['./saleb.component.css']
})
export class SalebComponent implements OnInit {
  displayedColumns: string[] = ['SaleNo', 'ItemNo', 'GoodsName', 'Qty', 'Price','Amount'];
  //寄件人標題日期管理
  loginFormb: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  // constructor(private formBuilder: FormBuilder, private router: Router) { }//, private authService: AuthenticationService
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // emailsDataSource = new MatTableDataSource<any>();
  tt = new MatTableDataSource<SaleB>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;
  // formBuilder: any;
 
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,private httpClient: HttpClient,private router: Router) {//

  }//private http: HttpClient,
  ngOnInit() {
 //validator
//  this.loginFormb = this.formBuilder.group({
//   SaleNo: ['', Validators.required],
//   ItemNo: ['', Validators.required],
//   GoodsName: ['', Validators.required],
//   Qty: ['', Validators.required],
//   Price: ['', Validators.required],
//   Amount: ['', Validators.required]
// });

this.loginFormb = this.formBuilder.group({
  SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
  ItemNo: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
  GoodsName: ['', Validators.compose([Validators.required,Validators.maxLength(48)])],
  Qty: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
  Price: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
  Amount: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
});



      //自訂篩選前端資料的邏輯
    this.tt.filterPredicate = (data: any, filter: string): boolean => {
      return data.title.indexOf(filter) !== -1;
    };
    //later open
    // this.getIssues(0, 10);
    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getIssuees();
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
    const baseUrl=`http://localhost:51962/api/Saleb/GetSaleBs?SaleNo=${this.loginFormb.controls.SaleNo.value}`;
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .get<SaleBModel>(baseUrl)
      .subscribe(data => {
        // this.tt.data = data.SaleBs;
        this.loginFormb.setValue
        ({SaleNo:data.SaleBs[0].SaleNo,
          ItemNo:data.SaleBs[0].ItemNo,
          GoodsName:data.SaleBs[0].GoodsName,
          Qty:data.SaleBs[0].Qty,
          Price:data.SaleBs[0].Price,
          Amount:data.SaleBs[0].Amount
       });
      });
  }
  Update()
  {
    var user = { CustomerNo: "Tiger", Name: "Liu" ,DeAddress:"",PhoneNo:""}
    const baseUrl='http://localhost:51962/api/Saleb/PUTSaleB?SiteNo=xx';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .put<SaleBModel>(baseUrl,user, this.httpOptions)
      .subscribe(data => {
        // this.tt.data = data.SaleBs;

      });
  }
  Delete()
  {
    const baseUrl=`http://localhost:51962/api/Saleb/DelSaleB?SaleNo=${this.loginFormb.controls.SaleNo.value}&ItemNo=${this.loginFormb.controls.ItemNo.value}`;
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .delete<SaleBModel>(baseUrl)
      .subscribe(data => {
        // this.tt.data = data.SaleBs;

      });
  }
//clear is to clear form
Clear()
{
// this.loginFormb.controls.SaleNo.invalid;
// this.loginFormb.controls.ItemNo.invalid;
// this.loginFormb.controls.GoodsName.invalid;
// this.loginFormb.controls.Qty.invalid;
// this.loginFormb.controls.Price.invalid;
// this.loginFormb.controls.Amount.invalid;

this.loginFormb.setValue
({SaleNo:"",
ItemNo:"",
GoodsName:"",
Qty:"",
Price:"",
Amount:"",
});

}

  onSubmit() {
    this.submitted = true;
    if (this.loginFormb.valid) {
      var user = { SaleNo: "Tiger", ItemNo: "Liu" ,GoodsName:"",Qty:"",Price:"",Amount:""};
      //(this.loginFormb.controls.Customer.value,this.loginFormb.controls.Name.value,this.loginFormb.controls.Deaddress.value,this.loginFormb.controls.PhoneNo.value);
      user.SaleNo=this.loginFormb.controls.SaleNo.value;
      user.ItemNo=this.loginFormb.controls.ItemNo.value;
      user.GoodsName=this.loginFormb.controls.GoodsName.value;
      user.Qty=this.loginFormb.controls.Qty.value;
      user.Price=this.loginFormb.controls.Price.value;
      user.Amount=this.loginFormb.controls.Amount.value;
    //post service
    const baseUrl='http://localhost:51962/api/SaleB/PostSaleB';
    this.httpClient
      .post<SaleB>(baseUrl,user,this.httpOptions).subscribe(data => {
        // this.tt.data = data.SaleAs;
        console.log(data);
      });;
  }
  }
  
  getIssuees() {
    // const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    const baseUrl='http://localhost:51962/api/Saleb/GetSaleBgv';
    this.httpClient
      .get<SaleBModel>(baseUrl)
      .subscribe(data => {
        this.tt.data = data.SaleBs;
      });
  }
  
  animal: string;
  name: string;

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}



// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'popUpSaleFile.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,public dia:MatDialogModule) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }



// }