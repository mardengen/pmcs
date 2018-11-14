import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo5Component } from './demo5.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';

describe('Demo5Component', () => {
  let component: Demo5Component;
  let fixture: ComponentFixture<Demo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo5Component ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]
                        // declarations: [ SaleaComponent,MatSort ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
