import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JumpwindowComponent} from './jumpwindow.component';
import { RouterModule, Routes } from '@angular/router';
// import {Demo2Component} from './demo2/demo2.component';
const routes: Routes = [
  { path: '', component: JumpwindowComponent },
  { path: 'jump', component: JumpwindowComponent }
  ];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class JumpwindowRouterModule { }
