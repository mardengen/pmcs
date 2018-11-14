import { Component, OnInit } from '@angular/core';
import {OPEC_PRMaster} from '../../models/OPEC_PRMaster';
import {user} from '../../user';
import {UserServiceService} from '../../Service/user-service.service';
import {UsersService} from '../../Service/users.service';
//for table
import {  ViewChild, ElementRef } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';
import {MatSort,Sort} from '@angular/material/sort';
// import { FNDA_PLANTDATA } from '../models/FNDA_PLANTDATA';
import { HttpClient } from '@angular/common/http';
// import { FNDA_PLANTDATA_Model } from '../models/FNDA_PLANTDATA_Model';
import { OPEC_PRMaster_Model } from '../../models/OPEC_PRMaster_Model';
// import { OPEC_PRMaster } from '../../models/OPEC_PRMaster';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
//for table
//for table
displayedColumns: string[] = ['FormNo', 'OldFormNo', 'ANO', 'CCUR', 'SiteNo','SiteName','ExpenseType','ChargeType','ProjectNO','Applicant','Buyer','EquipmentController','Finance','Amount','Currency','ChargeDept','Remark','managerment'];//,''
  //寄件人標題日期管理
  // emailsDataSource = new MatTableDataSource<any>();
  tt = new MatTableDataSource<OPEC_PRMaster>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;


  constructor(
    // private httpClient: HttpClient,
    private ctrl6:UserServiceService,
    private ctrl8:UsersService,private httpClient: HttpClient
  ) { }
User:user;

  ngOnInit() 
  {
    this.ctrl8.getUsers()
    .subscribe(data => 
      this.User.UserID=data.UserID,
      // this.User=data
      
      );


    //table
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
    const baseUrl='http://localhost:3847/api/prapi/GetReport?siteno=005';
    // let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    // if (this.currentSort.direction) {
    //   targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    // }
    this.httpClient
      .get<OPEC_PRMaster_Model>(baseUrl)
      .subscribe(data => {
        // this.totalCount = data.total_count;
        this.tt.data = data.masters;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }

}
