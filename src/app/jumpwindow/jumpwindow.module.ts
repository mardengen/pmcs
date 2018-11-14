import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JumpwindowComponent} from './jumpwindow.component';
import {JumpwindowRouterModule} from './jumpwindow-router.module';
import {AngularDualListBoxModuleModule} from './angular-dual-list-box-module.module';
// import {Demo2Component} from './demo2/demo2.component';
@NgModule({
  imports: [
    CommonModule,
    JumpwindowRouterModule,
    AngularDualListBoxModuleModule
  ],
  declarations: [
    JumpwindowComponent
  ]
})
export class JumpwindowModule { }
