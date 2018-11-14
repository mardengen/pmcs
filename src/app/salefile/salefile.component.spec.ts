import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalefileComponent } from './salefile.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SalefileComponent', () => {
  let component: SalefileComponent;
  let fixture: ComponentFixture<SalefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalefileComponent ],//FormGroup
      imports: [RouterTestingModule,ReactiveFormsModule,HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]

      // declarations: [ SaleaComponent,MatSort,FormBuilder,MatPaginator ],
      // imports: [HttpClientModule,SharedMaterialModule],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
