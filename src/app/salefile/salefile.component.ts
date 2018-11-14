// import { SaleFilesModel } from './../models/SaleFilesModel';
import { SaleFiles } from './../models/SaleFiles';
import { Component, OnInit,Inject,ViewChild,ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
// import { SaleFiles } from '../models/SaleFiles';
import { SaleFilesModel } from '../models/SaleFilesModel';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//for dialog
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-salefile',
  templateUrl: './salefile.component.html',
  styleUrls: ['./salefile.component.css']
})
export class SalefileComponent implements OnInit {
  displayedColumns: string[] = ['SaleNo', 'FileName', 'FilePath'];
  //寄件人標題日期管理
  // emailsDataSource = new MatTableDataSource<any>();
  tt = new MatTableDataSource<SaleFiles>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;
 
  loginFormc: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient) {//

  }//private http: HttpClient,
  ngOnInit() {
    this.tt.paginator = this.paginator;
    this.tt.sort = this.sort;
 //for validator
 this.loginFormc = this.formBuilder.group({
  SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
  FileName: ['', Validators.compose([Validators.required,Validators.maxLength(64)])],
  FilePath: ['', Validators.compose([Validators.required,Validators.maxLength(125)])],
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

    // 分頁切換時，重新取得資料
    //later open
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage = page;
      this.getIssuees();
    });
    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      // this.getIssues(page.pageIndex, page.pageSize);
     });
     
    // this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1').subscribe(data => {
    //   this.emailsDataSource.data = data.items;
    //   this.totalCount = data.items.length;
    //   this.emailsDataSource.data = data.items;
    //   this.emailsDataSource.paginator = this.paginator;
    // });
  }

  applyFilter(filterValue: string) {
    this.tt.filter = filterValue.trim().toLowerCase();

    if (this.tt.paginator) {
      this.tt.paginator.firstPage();
    }
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
    const baseUrl=`http://localhost:51962/api/Salefiles/GetSaleFilesSearch?SaleNo=${this.loginFormc.controls.SaleNo.value}`;
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .get<SaleFilesModel>(baseUrl)
      .subscribe(data => {
        // this.tt.data = data.SaleBs;
        this.loginFormc.setValue
        ({SaleNo:data.SaleFiles[0].SaleNo,
          FileName:data.SaleFiles[0].FileName,
          FilePath:data.SaleFiles[0].FilePath,

       });
      });
  }
  Update()
  {
    const testc: SaleFiles =new SaleFiles( );
    testc.SaleNo=this.loginFormc.controls.SaleNo.value;
    testc.FileName=this.loginFormc.controls.FileName.value;
    testc.FilePath=this.loginFormc.controls.FilePath.value;

    
    var user = { SaleNo: "Tiger", FileName: "Liu" ,FilePath:""};
    const baseUrl='http://localhost:51962/api/Salefiles/PUTSaleFiles';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    // { SaleNo: "Tiger", FileName: "Liu" ,FilePath:""}
    this.httpClient
    .put<SaleFiles[]>(baseUrl,testc,this.httpOptions)
      // .put<SaleFiles>(baseUrl,JSON.stringify(testc), this.httpOptions)
      .subscribe(data => {
        // this.tt.data = data.SaleBs;

      });
  }
  Delete()
  {
    const baseUrl=`http://localhost:51962/api/Salefiles/DelSaleFiles?SaleNo=${this.loginFormc.controls.SaleNo.value}&FileName=${this.loginFormc.controls.FileName.value}`;
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .delete<SaleFiles>(baseUrl)
      .subscribe(data => {
        //this.tt.data = data.SaleBs;

      });
  }
//clear is to clear form
Clear()
{
// this.loginFormc.controls.SaleNo.invalid;
// this.loginFormc.controls.FileName.invalid;
// this.loginFormc.controls.FilePath.invalid;
this.loginFormc.setValue
({SaleNo:"",
  FileName:"",
  FilePath:""
});
// this.loginForm.controls.Qty.invalid;
// this.loginForm.controls.Price.invalid;
// this.loginForm.controls.Amount.invalid;

}

  onSubmit() {
    this.submitted = true;
    if (this.loginFormc.valid) {
      var user = { SaleNo: "Tiger", FileName: "Liu" ,FilePath:""};
      //(this.loginForm.controls.Customer.value,this.loginForm.controls.Name.value,this.loginForm.controls.Deaddress.value,this.loginForm.controls.PhoneNo.value);
      user.SaleNo=this.loginFormc.controls.SaleNo.value;
      user.FileName=this.loginFormc.controls.FileName.value;
      user.FilePath=this.loginFormc.controls.FilePath.value;
    //post service
    // const baseUrl='http://localhost:51962/api/SaleFiles/PostSaleFile?SiteNo=xx';
    const baseUrl='http://localhost:51962/api/SaleFiles/PostSaleFiles';
    this.httpClient.post<SaleFiles[]>(baseUrl,user).subscribe(
      data=>{

      }
    );
      // this.httpClient.post(baseUrl,user,this.httpOptions).subscribe(
      //   (res:Response)=>
      //   {

          
      //   }

      // )
    // this.httpClient.request("post",baseUrl,this.httpOptions).subscribe(
    //   data => {
    //     // this.tt.data = data.SaleAs;
    //     console.log(data);
    //   }
    // );

      // .post<SaleFiles>(baseUrl,user,this.httpOptions).subscribe(data => {
      //   // this.tt.data = data.SaleAs;
      //   console.log(data);
      // });;
  }
  }
  getIssuees() {
    // const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    const baseUrl='http://localhost:51962/api/SaleFiles/GetSaleFilesMdl?SiteNo=xx';
    // let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    // if (this.currentSort.direction) {
    //   targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    // }
    this.httpClient
      .get<SaleFilesModel>(baseUrl)
      .subscribe(data => {
        // this.totalCount = data.total_count;
        this.tt.data = data.SaleFiles;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了 
        // this.emailsDataSource.paginator = this.paginator;
      });
  }
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
