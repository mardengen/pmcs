import { Demo2Component } from './home/demo2/demo2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule } from '@angular/material';
import { SharedMaterialModule } from './share.module';
import { SaleaComponent } from './salea/salea.component';
import { SalebComponent } from './saleb/saleb.component';
// import { CustomerjComponent } from './customerj/customerj.component';
import { CustomerComponent } from './customer/customer.component';
import { SalefileComponent } from './salefile/salefile.component';
import { SalefileModule } from './salefile/salefile.module';
import { SaleaModule } from './salea/salea.module';
// import {SaleaComponent} from './salea/salea.component';
import { SalebModule } from './saleb/saleb.module';
import { CustomerModule } from './customer/customer.module';
import { GridlistComponent } from './gridlist/gridlist.component';
import {DialogOverviewExample} from './dialog/dialog-overview-example';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {DialogOverviewExampleDialog} from '../app/dialog/dialog-overview-example';
import {HomeModule} from './home/home.module';
import {JumpwindowModule} from './jumpwindow/jumpwindow.module';
import {MatFormFieldModule} from '@angular/material/form-field';
// MatNativeDateModule, MatMomentDateModule
import {SiteNoService} from './Service/site-no.service';
import { HttpClientModule } from '@angular/common/http';
// import { TemplateDrivenComponent } from './template-driven/template-driven.component';
// import { TemplateDrivenComponent2 } from './template-driven2/template-driven.component';
import {LoginComponent} from './login/login.component';
import {AllSaleAComponent} from './all-sale-a/all-sale-a.component'
import {AllSaleAModule} from './all-sale-a/all-sale-a.module';
import {Demo2Module} from './home/demo2/demo2.module';
import {Demo3Component} from './demo3/demo3.component';
import {Demo4Component} from './demo4/demo4.component';
import {Demo5Component} from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component } from './demo8/demo8.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./services/user.service";
import { LoginModule } from './login/login.module';

import {MatSelectModule} from '@angular/material/select';
import { HttpModule } from '@angular/http';
import {ReportModule} from './report/report.module';
import {ReportComponent} from './report/report.component';
import {TableModule} from './salea/table.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {TableElement} from './salea/table-element';
import {UploaderComponent} from './uploader/uploader.component';
import { PopUpCustomerModule } from './pop-up-customer/pop-up-customer.module';
import { PopUpDeleteChkModule } from './pop-up-delete-chk/pop-up-delete-chk.module';
import { PopUpSalebModule } from './pop-up-saleb/pop-up-saleb.module';
// import { PopErrorMsgModule } from './pop-error-msg/pop-error-msg.module';
import { PopUpSaleaModule } from './pop-up-salea/pop-up-salea.module';
// import (PopUpCustomerModule) from './pop-up-customer/pop-up-customer.module';
// import () from './pop-up-delete-chk/pop-up-delete-chk.module';
// import() from './pop-up-saleb/pop-up-saleb.module';

@NgModule({
  declarations: [
    // TableElement,
    UploaderComponent,
    ReportComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    Demo8Component,
    Demo7Component,
    Demo6Component,
    Demo5Component,
    Demo4Component,
    Demo3Component,
    AllSaleAComponent,
    AppComponent,
    SaleaComponent,
    SalebComponent,
    CustomerComponent,
    SalefileComponent,
    GridlistComponent,
    DialogOverviewExample,DialogOverviewExampleDialog,LoginComponent//,TemplateDrivenComponent,TemplateDrivenComponent2
  ],
  imports: [
    PopUpSaleaModule,
    HttpClientModule,
    PopUpSalebModule,
    PopUpDeleteChkModule,
    PopUpCustomerModule,
    TableModule,
    ReportModule,
    HttpModule,
    MatSelectModule,
    LoginModule,
    Demo2Module,
    AllSaleAModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SharedMaterialModule, SalefileModule, 
    SaleaModule, SalebModule, CustomerModule,MatDatepickerModule
    ,HomeModule,JumpwindowModule,MatFormFieldModule,ReactiveFormsModule
  ],
  
  providers: [SiteNoService,UserService],
  bootstrap: [AppComponent]
  ,entryComponents: [ AppComponent  ],
  exports:[PopUpSalebModule]
})
export class AppModule { }
