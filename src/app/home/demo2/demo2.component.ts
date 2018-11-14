import { Component, OnInit } from '@angular/core';
import {EquipControllerService} from '../../Service/equip-controller.service';
import {BuyerService} from '../../Service/buyer.service';
import {FINService} from '../../Service/fin.service';
import {FormNoService} from '../../Service/form-no.service';
import {PRTypeCodeService} from '../../Service/prtype-code.service';
import {SiteNoService} from '../../Service/site-no.service';
import {UserServiceService} from '../../Service/user-service.service';
import {UsersService} from '../../Service/users.service';
// import {UsersService} from '../../Service/users.service';
import {user} from '../../user';
import {OPEC_PRMaster} from '../../models/OPEC_PRMaster';
import {OPEC_PRDetail} from '../../models/OPEC_PRDetail';
import {OPEC_PRTYPE} from '../../models/OPEC_PRTYPE';
import {OPEC_PRTYPE_BUYER} from '../../models/OPEC_PRTYPE_BUYER';
import {OPEC_PRTYPE_EQUIPCONTROLLER} from '../../models/OPEC_PRTYPE_EQUIPCONTROLLER';
import {OPEC_PRTYPE_FINANCE} from '../../models/OPEC_PRTYPE_FINANCE';
import {FNDA_PLANTDATA} from '../../models/FNDA_PLANTDATA';
import {FNDA_USER} from '../../models/FNDA_USER';
import {Router} from '@angular/router'
import {InsertFormService} from './../../Service/insert-form.service';
import {SiteNoModel} from './../../models/SiteNoModel';
import {HttpClient} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
// import {  }    from 'rxjs/Subject';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
herourl:string;
heroes$: Observable<FNDA_PLANTDATA>;
private searchTerms = new Subject<string>();
  constructor(
    private http:HttpClient,
private UserServ:UsersService,
private EqiCtrl:EquipControllerService,
private BuyServ:BuyerService,
private FinServ:FINService,
private FormNoServ:FormNoService,
private PRTServ:PRTypeCodeService,
private SiteNoServ:SiteNoService,
private UsersServServ:UserServiceService,
// private ctrl7:UsersService,
private route:Router,
private insertformServ:InsertFormService
  ) { }
User:user;

PRMaster:Array<OPEC_PRMaster>;
PRDetail:Array<OPEC_PRDetail>;

  fromFormNosMaster:OPEC_PRMaster;
  fromFormNosDetails:Array<OPEC_PRDetail>;
  fromSiteNo:FNDA_PLANTDATA[];//SiteNoModel;
  fromprojectCode:Array<OPEC_PRTYPE>;//OPEC_PRMaster[];
  fromApplDate:Array<OPEC_PRMaster>;
  fromBuyer:Array<OPEC_PRTYPE_BUYER>;
  fromEquipController:Array<OPEC_PRTYPE_EQUIPCONTROLLER>;
  fromFIN:Array<OPEC_PRTYPE_FINANCE>;
  ToFrom:OPEC_PRMaster;

  ngOnInit() {
    this.UsersServServ.getUsers()
    .subscribe(data => this.User=data );

    this.GetMasterAndDetail();
  }

  // Array<Type>
//1
  GetNextFormNo():void
  {
  //  this.route.navigate(['/jump/']);
  }
//2
  gotoDetail(model):void
  {
;

  }
//3
GetMockDetails():void
{
  
  this.FormNoServ.getHeroMaster(5)
  .subscribe(data1 => this.fromFormNosMaster = data1);

 this.FormNoServ.getDetails()
 .subscribe(data=>this.PRDetail=data); 

 
}
//4
  GetMasterAndDetail():void{
    this.FormNoServ.getHeroMaster(5)
    .subscribe(data1 => this.fromFormNosMaster = data1);
 
    // this.ctrl3.getHeroDetails(5)
    // .subscribe(data => this.fromFormNosDetails = data);

  }
//5
  getUser(): void {
    // this.ctrl8.getUsers()
    // .subscribe(data => this.User = data);
    ;
  }
  //real 1
  getFormNo(): void {
    this.FormNoServ.getHeroMaster(5)
    .subscribe(data => this.fromFormNosMaster = data);
    this.FormNoServ.getHeroDetails(5)
    .subscribe(data1 => this.fromFormNosDetails = data1);
//session take to jumpwindow
    //this.route.navigate(['/jump/']);
    // .get<any>(targetUrl)
    // .subscribe(data => {
    //   this.totalCount = data.total_count;
    //   this.emailsDataSource.data = data.items;
    ;
  }
  //real 2
  getSiteNo(): void{//Observable<FNDA_PLANTDATA> {
    this.route.navigate(['/demo3/']);
  
}
  //real 3
  getprojectCode(): void {
 
    this.route.navigate(['/demo4/']);

  }
  //real 4
  // getApplDate(): void {
  //   // this.ctrl.getUsers()
  //   // .subscribe(data => this.users = data);
  //   this.route.navigate(['/jump/']);

  // }
  //real 5
  getBuyer(): void {
    this.route.navigate(['/demo5/']);
  }
  //real 6
  getEquipController(): void {
    this.route.navigate(['/demo6/']);
  }

  //real 7
  getFIN(): void {
    this.route.navigate(['/demo8/']);
  }

  //real 8
  getAmount():void{
    // this.route.navigate(['/jump/']);
  }
  //real 9
  submit():void
  {
  // session store data
  // Session["controller"] = "prapi";
  // Session["action"] = "InsertForm";

 //create class
  // var master :OPEC_PRMaster;
 
  // var details:OPEC_PRDetail[];
  let details=new Array<OPEC_PRDetail>(); 
  let master=new OPEC_PRMaster();
  master.FormNo ="";//txtFormNo.Text;
  master.SiteNo = "";//txtSiteNo.Text;
  master.ExpenseType ="";// ddlPrjType.SelectedItem.Text;
  master.Amount = "";//Convert.ToDecimal(txtAmount.Text);
  master.Buyer = "";//txtBuyer.Text;
  master.EquipmentController ="";// txtEquipCtler.Text;
  master.AppliedDate ="";// Convert.ToDateTime(txtAppDate.Text);
  master.Finance = "";//txtFIN.Text;
  // for (int i = 0; i < GridView1.Rows.Count; i++)
  // {
  //     GridView1.Rows[i].Cells[0].Text = txtFormNo.Text;
  // }
  // #region access gv method1
  // for (int i = 0; i < GridView1.Rows.Count; i++)
  // {
  //     OPEC_PRDetail item = new OPEC_PRDetail();
  //     item.FormNo = GridView1.Rows[i].Cells[0].Text;
  //     item.ItemNo = GridView1.Rows[i].Cells[1].Text;
  //     item.ItemDesc = GridView1.Rows[i].Cells[2].Text;
  //     item.quantity = Convert.ToDecimal(GridView1.Rows[i].Cells[3].Text);
  //     item.UnitPrice = Convert.ToDecimal(GridView1.Rows[i].Cells[4].Text);
  //     details.Add(item);
  // }
  // Session["param11"] = master;
  // Session["param12"] = details;

  //  callWebapi_Insert(master, details);
  this.insertformServ.postForm(master)
  .subscribe(data => this.ToFrom = data);
  this.route.navigate(['/jump/']);
  // insertform.
  //  #endregion
  }
}
