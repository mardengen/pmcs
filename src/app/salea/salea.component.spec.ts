import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SaleaComponent } from './salea.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSort, MatTableModule, MatPaginator } from '@angular/material';
import { SharedMaterialModule } from '../share.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
let component: SaleaComponent;
let fixture: ComponentFixture<SaleaComponent>;

class Page
{
//get button0(){return this.button[0];}
gotoListSpy:jasmine.Spy;
navigateSpy:jasmine.Spy;
constructor(fixture:ComponentFixture<SaleaComponent>)
{
const routerSpy=<any>fixture.debugElement.injector.get(Router)
this.navigateSpy=routerSpy.navigate;

const component=fixture.componentInstance;
 //this.gotoListSpy=spyOn(component,'SaleaComponent').and.callThrough;
}

private query<T>(selector:string):T
{
  return fixture.nativeElement.querySelector(selector);

}

private queryAll<T>(selector:string):T[]
{
  return fixture.nativeElement.querySelectorAll(selector);
}


}
// get button1(){return this.button[0];}
// get button2(){return this.button[0];}
// get button3(){return this.button[0];}
// get button4(){return this.button[0];}
// get button5(){return this.button[0];}
// get button6(){return this.button[6];}
// get button7(){return this.button[7];}
// get button8(){return this.button[8];}
// get button9(){return this.button[9];}
// get button10(){return this.button[10];}
// get button11(){return this.button[11];}
// get button12(){return this.button[12];}

function createComponent()
{
  fixture=TestBed.createComponent(SaleaComponent);
  component=fixture.componentInstance;
 let page=new Page(fixture);

  fixture.detectChanges();
  return fixture.whenStable().then(()=>{
fixture.detectChanges();
  });
}
describe('SaleaComponent', () => {
  // let component: SaleaComponent;
  // let fixture: ComponentFixture<SaleaComponent>;
// var $httpBackend;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleaComponent ],
      imports: [RouterTestingModule,ReactiveFormsModule,HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));
  // beforeEach(inject(_$httpBackend_,function() {
  //   $httpBackend=_$httpBackend_;
  // }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(()=>{

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
