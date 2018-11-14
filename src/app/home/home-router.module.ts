import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {Demo1Component} from './demo1/demo1.component';
import {Demo2Component} from './demo2/demo2.component';
const routes: Routes = [
  { path: 'home', component:HomeComponent, 
  children:
  [{ path: 'demo1', component:Demo1Component}, 
   {path: 'demo2', component:Demo2Component,  }]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}
