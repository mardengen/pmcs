import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaleaComponent} from './salea/salea.component';
import {SalebComponent} from './saleb/saleb.component';
import {CustomerComponent} from './customer/customer.component';
import {SalefileComponent} from './salefile/salefile.component';
import {GridlistComponent} from './gridlist/gridlist.component';
import {DialogOverviewExample} from './dialog/dialog-overview-example';
import {HomeComponent} from './home/home.component';
import {MatFormFieldModule } from '@angular/material'
import {SharedMaterialModule} from './share.module';
import {LoginComponent} from './login/login.component';
import {AllSaleAComponent} from './all-sale-a/all-sale-a.component';
import {Demo3Component} from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component } from './demo8/demo8.component';
import { AddUserComponent } from './add-user/add-user.component';
// import { NgMatComponent } from './ng-mat/ng-mat.component';
import { ReportComponent } from './report/report.component';
// const routes: Routes = [];
const routes: Routes = [
  { path: '',component: LoginComponent},// redirectTo: '/login', pathMatch: 'full' },
  { path: 'salea', component: SaleaComponent },
  { path: 'saleb', component: SalebComponent },
  { path: 'allSaleas', component: AllSaleAComponent },
  { path: 'salefile', component: SalefileComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'gridlist', component: GridlistComponent },
  { path: 'dialog', component: DialogOverviewExample },
  { path: 'home', component: HomeComponent },
  // {path:'material',component:NgMatComponent},
  {path:'demo3',component:Demo3Component},
  {path:'demo4',component:Demo4Component},
  {path:'demo5',component:Demo5Component},
  {path:'demo6',component:Demo6Component},
  {path:'demo7',component:Demo7Component},
  {path:'demo8',component:Demo8Component},
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'report', component: ReportComponent },
  {path : '', component : LoginComponent}
  ];
@NgModule({
  // declarations:[SaleaComponent,HomeComponent],
  imports: [MatFormFieldModule ,RouterModule.forRoot(routes)],//SharedMaterialModule 
  exports: [RouterModule]
})
export class AppRoutingModule { }
