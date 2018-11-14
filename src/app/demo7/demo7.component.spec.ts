import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7Component } from './demo7.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Demo7Component', () => {
  let component: Demo7Component;
  let fixture: ComponentFixture<Demo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo7Component ],
      imports: [HttpClientModule,SharedMaterialModule,BrowserAnimationsModule],
      providers:[HttpClientTestingModule]
                                    // declarations: [ SaleaComponent,MatSort ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
