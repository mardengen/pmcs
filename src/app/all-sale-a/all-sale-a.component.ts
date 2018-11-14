import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatDialog} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';
import {MatSort,Sort} from '@angular/material/sort';
import { SaleA } from '../models/SaleA';
import {SaleAModel} from '../models/SaleAModel';
import { DialogOverviewExampleDialog } from '../pop-up-delete-chk/pop-up-delete-chk.component';
import * as myGlobals from './../global';
import { SaleB } from '../models/SaleB';
import { DialogOverviewExampleDialog3 } from '../pop-up-saleb/pop-up-saleb.component';
import { DialogOverviewExampleDialog4 } from '../pop-up-salea/pop-up-salea.component';
let tmpgv;
@Component({
  selector: 'app-all-sale-a',
  templateUrl: './all-sale-a.component.html',
  styleUrls: ['./all-sale-a.component.css']
})
export class AllSaleAComponent implements OnInit {
  displayedColumns: string[] = ['SaleNo', 'SaleDate', 'CustomerNo', 'DeAddress', 'PhoneNo','TotalAmt','management'];
  //寄件人標題日期管理
  // emailsDataSource = new MatTableDataSource<any>();
  
  animal: string;
  name: string;
  tt = new MatTableDataSource<SaleA>();
  // displayedColumns
  totalCount ;//= data.items.length;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  currentPage: PageEvent;
  currentSort: Sort;
  @ViewChild('filter') filter: ElementRef;
  currentFilterData: string;
  @ViewChild(DialogOverviewExampleDialog)
  private popwindowSaleb:DialogOverviewExampleDialog;

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.tt.data.forEach(row => this.selection.select(row));
  // }
  constructor(private httpClient: HttpClient,public dialog: MatDialog) {//

  }//private http: HttpClient,
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

    // 分頁切換時，重新取得資料
    //later open
    // this.paginator.page.subscribe((page: PageEvent) => {
    //   this.currentPage = page;
    //   this.getIssuees();
    // });
    // // 分頁切換時，重新取得資料
    // this.paginator.page.subscribe((page: PageEvent) => {
    //   this.getIssues(page.pageIndex, page.pageSize);
    //  });
     
    // this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1').subscribe(data => {
    //   this.emailsDataSource.data = data.items;
    //   this.totalCount = data.items.length;
    //   this.emailsDataSource.data = data.items;
    //   this.emailsDataSource.paginator = this.paginator;
    // });
  }
  getIssuees() {
    // const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    const baseUrl='http://localhost:51962/api/Salea/GetSaleA';
    // let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    // if (this.currentSort.direction) {
    //   targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    // }
    this.httpClient
      .get<SaleAModel>(baseUrl)
      .subscribe(data => {
        // this.totalCount = data.total_count;
        this.tt.data = data.SaleAs;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
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
//dialogRef4.componentInstance.RowNo=pos;
// this.rowline=`${pos}`;
    //const numSelected = this.selection.selected.length;
myGlobals.Globals.rowno=pos;
    const dialogRef4 = this.dialog.open(DialogOverviewExampleDialog4, {
      width: '250px',
      data: rowno
    });
    dialogRef4.beforeClose().subscribe(data=>{
      // this.data.rowline=`${pos}`;
      const test:SaleA=new SaleA();
      // let test1:Array<SaleB> ;//=new Array<SaleB>();
       test.SaleNo=dialogRef4.componentInstance.popSaleaForm.controls.SaleNo.value;
       test.SaleDate=dialogRef4.componentInstance.popSaleaForm.controls.SaleDate.value;
       test.CustomerNo=dialogRef4.componentInstance.popSaleaForm.controls.CustomerNo.value;
       test.DeAddress=dialogRef4.componentInstance.popSaleaForm.controls.DeAddress.value;
       test.PhoneNo=dialogRef4.componentInstance.popSaleaForm.controls.PhoneNo.value;
       test.TotalAmt=dialogRef4.componentInstance.popSaleaForm.controls.TotalAmt.value;
       //const no=dialogRef4.componentInstance.RowNo;
       const no=myGlobals.Globals.rowno;
  //  test1=new Array<SaleB>();
  //  test1.push(test);
       // sa.push(test)
       // this.socket.on('newMessage', function(event) {
         // const data = this.dataSource.data;

        //  this.tt.data[no]=test;

        //  this.tt.data[no].SaleNo=test.SaleNo;
        //  this.tt.data[no].ItemNo=test.ItemNo;
        //  this.tt.data[no].GoodsName=test.GoodsName;
        //  this.tt.data[no].Price=test.Price;
        //  this.tt.data[no].Qty=test.Qty;
        //  this.tt.data[no].Amount=test.Amount;
         this.tt.data.map((todo, i) => {
           //update gv data
          if ((todo.SaleNo == test.SaleNo)&&todo.SaleDate==test.SaleDate&&todo.CustomerNo==test.CustomerNo)
          { //其實不用這麼多~只要SaleNo但先寫之後再拿掉
             this.tt.data[i] = test;
             
             
           } 
          //insert gv data
          if ((todo.SaleNo == '')&&test.SaleNo!='')
          { 
            this.tt.data[i] = test;
          
          }

          });
        //  this.toDoTaskList.map((todo, i) => {
        //   if (todo.id == newRecordToUpdate .id){
        //      this.toDoTaskList[i] = updatedVal;
        //    }
        this.tt.data=this.tt.data;
               // this.tt.data.find(this,this.tt.data[9],1,this.tt.data);
      // const x=this.tt.data.indexOf(this.tt.data[0],1);
      // this.tt.data.reverse();
         //this.tt.data=this.tt.data.concat(test);
    })
    dialogRef4.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      const tf=this.popwindowSaleb.IfdeleteGV;
    });
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
// MatDialogRef<this.popwindowSaleb>=dialogRef;
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
  //onNotifyClicked(message:string):void
  //{
    
    const tf=this.popwindowSaleb.IfdeleteGV;
    //this.showMessage=this.IfdeleteGV;
  //}
  console.log('The dialog was closed');
  this.animal = result;
});


  }
}
