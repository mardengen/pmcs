import { Component, OnInit } from '@angular/core';
//for table
import {  ViewChild, ElementRef } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';
import {MatSort,Sort} from '@angular/material/sort';
import { FNDA_PLANTDATA } from '../models/FNDA_PLANTDATA';
import { HttpClient } from '@angular/common/http';
import { FNDA_PLANTDATA_Model } from '../models/FNDA_PLANTDATA_Model';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
//for table
displayedColumns: string[] = ['PLANT', 'PLANTAB', 'PLANTNAME', 'MDATE', 'PERSON','CPNY','HOMECURRENCY','PHONE','HQID','managerment'];//,''
  //寄件人標題日期管理
  // emailsDataSource = new MatTableDataSource<any>();
  tt = new MatTableDataSource<FNDA_PLANTDATA>();
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
    const baseUrl='http://localhost:3847/api/prapi/GetSiteNoModel';
    // let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    // if (this.currentSort.direction) {
    //   targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    // }
    this.httpClient
      .get<FNDA_PLANTDATA_Model>(baseUrl)
      .subscribe(data => {
        // this.totalCount = data.total_count;
        this.tt.data = data.plandatas;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }
}
