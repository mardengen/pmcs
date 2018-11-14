import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo6Component } from './demo6.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';

describe('Demo6Component', () => {
  let component: Demo6Component;
  let fixture: ComponentFixture<Demo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo6Component ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]
                              // declarations: [ SaleaComponent,MatSort ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
