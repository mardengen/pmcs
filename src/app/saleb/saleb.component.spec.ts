import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalebComponent } from './saleb.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SalebComponent', () => {
  let component: SalebComponent;
  let fixture: ComponentFixture<SalebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalebComponent],
      imports: [RouterTestingModule,ReactiveFormsModule,HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]
      // declarations: [ SaleaComponent,MatSort,FormBuilder,MatPaginator ],
      // imports: [HttpClientModule,SharedMaterialModule],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
