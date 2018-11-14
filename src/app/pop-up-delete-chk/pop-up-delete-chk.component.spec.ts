import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialog } from './pop-up-delete-chk.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('PopUpDeleteChkComponent', () => {
  let component: DialogOverviewExampleDialog;
  let fixture: ComponentFixture<DialogOverviewExampleDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewExampleDialog ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule,
      	{ provide: MatDialogRef, useValue: {} },
	{ provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewExampleDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
