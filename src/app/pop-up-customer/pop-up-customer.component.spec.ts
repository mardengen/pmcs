import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialog2 } from './pop-up-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('PopUpCustomerComponent', () => {
  let component: DialogOverviewExampleDialog2;
  let fixture: ComponentFixture<DialogOverviewExampleDialog2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewExampleDialog2 ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule,
      	{ provide: MatDialogRef, useValue: {} },
	{ provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewExampleDialog2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
