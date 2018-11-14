import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComponent ],//FormGroup
      imports: [RouterTestingModule,ReactiveFormsModule,HttpClientTestingModule,HttpClientModule,SharedMaterialModule]
      // ,providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    const hostElement=fixture.nativeElement;
    let saleNo:HTMLInputElement=hostElement.querySelector('input#SaleNo');//p.query('input');//
// const nameDisplay:HTMLElement=hostElement.querySelector('span');
saleNo.value="181026";
let SaleDateFrom:HTMLInputElement=hostElement.querySelector('textarea#SaleDateFrom');//p.query('input');//
// const nameDisplay:HTMLElement=hostElement.querySelector('span');
SaleDateFrom.value="2018/11/01";
let SaleDateEnd:HTMLInputElement=hostElement.querySelector('textarea#SaleDateEnd');//p.query('input');//
// const nameDisplay:HTMLElement=hostElement.querySelector('span');
SaleDateEnd.value="2018/10/31";
let CustomerNo:HTMLInputElement=hostElement.querySelector('input#CustomerNo');//p.query('input');//
// const nameDisplay:HTMLElement=hostElement.querySelector('span');
CustomerNo.value="181109";
let btnSearch:HTMLInputElement=hostElement.querySelector('button#btnSearch');
btnSearch.click();
  });
});
