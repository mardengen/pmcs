import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialog4 } from './pop-up-salea.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
describe('DialogOverviewExampleDialog4', () => {
  let component: DialogOverviewExampleDialog4;
  let fixture: ComponentFixture<DialogOverviewExampleDialog4>;
  let formBuilder:FormBuilder;
  // const txt=fixture.nativeElement.querySelector('h1').textcontent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogOverviewExampleDialog4],
      imports: [MatDialogModule,HttpClientTestingModule,HttpClientModule,SharedMaterialModule,ReactiveFormsModule],
      // providers:[provide: MatDialogRef, useValue: {},MatDialogModule,SharedMaterialModule]
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }

  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewExampleDialog4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
