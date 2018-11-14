import { Component, OnInit } from '@angular/core';
//for table
import {  ViewChild, ElementRef } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';
import {MatSort,Sort} from '@angular/material/sort';
import { FNDA_USER_Model } from '../models/FNDA_USER_Model';
import { FNDA_USER } from '../models/FNDA_USER';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component implements OnInit {

  displayedColumns: string[] = ['NEWDEPTID', 'NEWSUPERVISORID', 'REMARK', 'USERID','EMPLOYEEID','CHINESENAME','ENGLISHNAME','DEPTID','SUPERVISORID','EMAIL','LOCATIONNO','SALARYLOCATION','DISPLAYNAME','PHONE','COMPANY','managerment'];//,''
  //寄件人標題日期管理
  // emailsDataSource = new MatTableDataSource<any>();
  tt = new MatTableDataSource<FNDA_USER>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
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
  getIssuees() {
    // const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    const baseUrl='http://localhost:3847/api/UserAPI/GetUsers?UserId=ISMS090914';
    // let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    // if (this.currentSort.direction) {
    //   targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    // }
    this.httpClient
      .get<FNDA_USER_Model>(baseUrl)
      .subscribe(data => {
        // this.totalCount = data.total_count;
        this.tt.data = data.users;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }

}
