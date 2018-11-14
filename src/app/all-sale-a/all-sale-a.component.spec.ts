import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSaleAComponent } from './all-sale-a.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableDataSource, MatTableModule } from '@angular/material';
import { SharedMaterialModule } from '../share.module';

describe('AllSaleAComponent', () => {
  let component: AllSaleAComponent;
  let fixture: ComponentFixture<AllSaleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSaleAComponent ],
      imports: [HttpClientModule,MatTableModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSaleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
