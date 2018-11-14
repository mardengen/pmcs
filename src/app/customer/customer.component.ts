import { CustomerModel } from './../models/CustomerModel';
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
import { Customer } from '../models/Customer';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { tap, catchError } from 'rxjs/operators';
//for dialog
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

// interface Person {
//   CustomerNo: string;
//   Name: string;
//   DeAddress: string;
//   PhoneNo: string;
  
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }


// this.CustomerNo=aa;
// this.Name=bb;
// this.DeAddress=cc;
// this.PhoneNo=dd;
export class CustomerComponent implements OnInit {
//for validate
 baseUrl='http://localhost:51962/api/Customer/AddCustomer';
loginFormd: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  //  httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  aa:Customer ;
  a:any;
  displayedColumns: string[] = ['CustomerNo', 'Name', 'DeAddress', 'PhoneNo', 'management'];
  //寄件人標題日期管理
  // emailsDataSource = new MatTableDataSource<any>();
  tt = new MatTableDataSource<Customer>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;
  cust:Customer;
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient) {//

  }//private http: HttpClient,
  ngOnInit() {
 //for validate
//  this.loginForm = this.formBuilder.group({
//   CustomerNo: ['', Validators.required],
//   Name: ['', Validators.required],
//   DeAddress: ['', Validators.required],
//   PhoneNo: ['', Validators.required]
//});
this.loginFormd = this.formBuilder.group({
  CustomerNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
  Name: ['', Validators.compose([Validators.required,Validators.maxLength(32)])],
  DeAddress: ['', Validators.compose([Validators.required,Validators.maxLength(125)])],
  PhoneNo: ['', Validators.compose([Validators.required,Validators.maxLength(16)])]
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

  onSubmit() {
    this.submitted = true;
    if (this.loginFormd.valid) {
   var user = { CustomerNo: "Tiger", Name: "Liu" ,DeAddress:"",PhoneNo:""};
    //(this.loginForm.controls.Customer.value,this.loginForm.controls.Name.value,this.loginForm.controls.Deaddress.value,this.loginForm.controls.PhoneNo.value);
    user.CustomerNo=this.loginFormd.controls.CustomerNo.value;
    user.DeAddress=this.loginFormd.controls.DeAddress.value;
    user.Name=this.loginFormd.controls.Name.value;
    user.PhoneNo=this.loginFormd.controls.PhoneNo.value;


    const baseUrl='http://localhost:51962/api/Customer/AddCustomer';
    this.httpClient.post<Customer>(baseUrl,JSON.stringify(user), this.httpOptions).subscribe(data => {
        // this.tt.data = data.SaleAs;
        console.log(data);
      });;

  }
  }
  addHero (user: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, user, this.httpOptions)
      .pipe(
        // tap(console.log("ok"));
      );
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
    const baseUrl=`http://localhost:51962/api/Customer/GetCustomerSearch?CustomerNo=${this.loginFormd.controls.CustomerNo.value}`;
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .get<CustomerModel>(baseUrl)
      .subscribe(data => {
        //this.tt.data = data.SaleBs;
        this.loginFormd.setValue
        ({CustomerNo:data.Customers[0].CustomerNo,
          DeAddress:data.Customers[0].DeAddress,
          Name:data.Customers[0].Name,
          PhoneNo:data.Customers[0].PhoneNo,
       });
      });

  }
  Update()
  {

     var user = { CustomerNo: "Tiger", Name: "Liu" ,DeAddress:"",PhoneNo:""};
    const baseUrl='http://localhost:51962/api/Customer/PUTCustomer?SiteNo=xx';
    // var user = { SaleNo: "Tiger", SaleDate: "Liu" ,CustomerNo:"",DeAddress:"",PhoneNo:"",TotalAmt:""};
    //(this.loginForm.controls.Customer.value,this.loginForm.controls.Name.value,this.loginForm.controls.Deaddress.value,this.loginForm.controls.PhoneNo.value);
    user.CustomerNo=this.loginFormd.controls.CustomerNo.value;
    user.Name=this.loginFormd.controls.Name.value;
    user.DeAddress=this.loginFormd.controls.DeAddress.value;
    user.PhoneNo=this.loginFormd.controls.PhoneNo.value;
    // user.PhoneNo=this.loginForm.controls.PhoneNo.value;
    // user.TotalAmt=this.loginForm.controls.TotalAmt.value;
    this.httpClient
      .put<any>(baseUrl,user, this.httpOptions)
      .subscribe(data => {
        //this.tt.data = data.SaleBs;

      });
  }
  Delete()
  {
    const baseUrl=`http://localhost:51962/api/Customer/DelCustomer?CustomerNo=${this.loginFormd.controls.CustomerNo.value}&Name=${this.loginFormd.controls.Name.value}`;
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
    // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
    this.httpClient
      .delete<any>(baseUrl)
      .subscribe(data => {
        //this.tt.data = data.SaleBs;

      });
  }
//clear is to clear form
  Clear()
  {
    // this.loginForm.controls.CustomerNo.invalid;
    // this.loginForm.controls.DeAddress.invalid;
    // this.loginForm.controls.Name.invalid;
    // this.loginForm.controls.PhoneNo.invalid;
    this.loginFormd.setValue
    ({CustomerNo:"",
    Name:"",
    DeAddress:"",
    PhoneNo:""
    });

  }
  // createUser(user: Customer) {
  //    this.httpClient.post(this.baseUrl, JSON.stringify(user), this.httpOptions);
  // }
  getIssuees() {
    // const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    const baseUrl='http://localhost:51962/api/Customer/GetCustomers?SiteNo=xx';
    // let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    // if (this.currentSort.direction) {
    //   targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    // }
    this.httpClient
      .get<Customer[]>(baseUrl)
      .subscribe(data => {
        // this.totalCount = data.total_count;
        this.tt.data = data;
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