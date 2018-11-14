import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo4Component } from './demo4.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';

describe('Demo4Component', () => {
  let component: Demo4Component;
  let fixture: ComponentFixture<Demo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo4Component ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]
                  // declarations: [ SaleaComponent,MatSort ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
