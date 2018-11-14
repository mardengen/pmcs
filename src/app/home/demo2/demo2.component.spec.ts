import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2Component } from './demo2.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { SharedMaterialModule } from 'src/app/share.module';
import { MatPaginator } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('Demo2Component', () => {
  let component: Demo2Component;
  let fixture: ComponentFixture<Demo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo2Component ],
      // declarations: [ SaleaComponent,MatSort ],
      imports: [HttpClientModule,SharedMaterialModule,RouterTestingModule],
      providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
