import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError } from '../http-error-handler.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, Sort } from '@angular/material';
import { SaleB } from '../models/SaleB';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleBModel } from '../models/SaleBModel';
import { SaleAModel } from '../models/SaleAModel';
import {ResultReport} from '../models/ResultReport';
import { SaleAB_Model } from '../models/SaleAB_Model';
import { SaleAB } from '../models/SaleAB';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xls';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

// 'SaleNo', 'SaleDate', 'CustomerNo', 'DeAddress','PhoneNo','TotalAmt', 'ItemNo', 'GoodsName','Qty','Price','Amount','management'
export class ReportComponent implements OnInit {
  
  displayedColumns: string[] = ['SaleNo', 'SaleDate', 'CustomerNo', 'DeAddress','PhoneNo','TotalAmt', 'ItemNo', 'GoodsName','Qty','Price','Amount'];
  //寄件人標題日期管理
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private handleError: HandleError;
  message: string;
  tt = new MatTableDataSource<SaleAB>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') 
  paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;
  //according login
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient) { }


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      SaleNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      SaleDateFrom: ['', Validators.compose([Validators.required,Validators.maxLength(40)])],
      SaleDateEnd: ['', Validators.compose([Validators.required,Validators.maxLength(40)])],
      CustomerNo: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      DeAddress: ['', Validators.compose([Validators.required,Validators.maxLength(125)])],
      PhoneNo: ['', Validators.compose([Validators.required,Validators.maxLength(16)])],
      TotalAmt: ['', Validators.compose([Validators.required,Validators.maxLength(30)])]
});
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
  this.getIssuees();
  }
  test():void
  {
this.ExportXLS(this.tt.data,"joshxls");

  }

ExportXLS(json: any[], excelFileName: string): void
  {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tt.data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.createFileName("josh"));
    // json=this.tt.data;
    // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
   // this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private createFileName(fileName: string): string {

    var today = new Date();
    var date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '_';
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var name = fileName + date + time+".xlsx";
    return name;
    //FileSaver.saveAs(data, name + EXCEL_EXTENSION);
    }
Search()
{

  //  this.log(`fetched hero id=${id}`)),string SaleNo,string CustomerNo,string SaleDateFrom, string SaleDateEnd
  const baseUrl=`http://localhost:51962/api/Report/GetReportSearch?SaleNo=${this.loginForm.controls.SaleNo.value}&CustomerNo=${this.loginForm.controls.CustomerNo.value}&SaleDateFrom=${this.loginForm.controls.SaleDateFrom.value}&SaleDateEnd=${this.loginForm.controls.SaleDateEnd.value}`;
  // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
  // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
  this.httpClient
    .get<SaleAB_Model>(baseUrl)
    .subscribe(data => {
        this.tt.data=data.lab;
    });
}
Clear()
{
this.loginForm.controls.SaleNo.invalid;
this.loginForm.controls.SaleDate.invalid;
this.loginForm.controls.CustomerNo.invalid;
this.loginForm.controls.DeAddress.invalid;
this.loginForm.controls.PhoneNo.invalid;
this.loginForm.controls.TotalAmt.invalid;

}
  getIssuees() {

    // const baseUrla='http://localhost:51962/api/Salea/GetSaleA';

    // this.httpClient
    //   .get<SaleAModel>(baseUrla)
    //   .subscribe(data => {
    //     this.tt.data = data.SaleAs;

    //   });

    // const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
      const baseUrl='http://localhost:51962/api/Report/GetReportAll';
      // const baseUrl='http://localhost:51962/api/Saleb/GetSaleB?saleno=josh005&itemno=8';
      // const baseUrl='http://localhost:51962/api/Saleb/GetSaleBori?saleno=josh005&itemno=8';
      this.httpClient
        .get<SaleAB_Model>(baseUrl)
        .subscribe(data => {
           this.tt.data = data.lab;

        });
  }
}
