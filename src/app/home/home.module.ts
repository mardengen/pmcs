import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-router.module';
import {Demo1Module} from './demo1/demo1.module';
import {Demo2Module} from './demo2/demo2.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    Demo1Module,
    Demo2Module
  ],
  declarations: [
    Demo1Component,
    Demo2Component,
    HomeComponent
  ]
})
export class HomeModule { }
