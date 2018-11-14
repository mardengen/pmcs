import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo8Component } from './demo8.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Demo8Component', () => {
  let component: Demo8Component;
  let fixture: ComponentFixture<Demo8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo8Component ],
      imports: [HttpClientModule,SharedMaterialModule,BrowserAnimationsModule],
      providers:[HttpClientTestingModule]
                                          // declarations: [ SaleaComponent,MatSort ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
