import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialog3 } from './pop-up-saleb.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule,MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('DialogOverviewExampleDialog3', () => {
  let component: DialogOverviewExampleDialog3;
  let fixture: ComponentFixture<DialogOverviewExampleDialog3>;
let formBuilder: FormBuilder;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewExampleDialog3  ],
      imports: [HttpClientTestingModule,HttpClientModule,SharedMaterialModule,ReactiveFormsModule]
      // ,providers:[MatDialogModule,SharedMaterialModule]
      ,      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
      // declarations: [ SaleaComponent,MatSort,FormBuilder,MatPaginator ],
      // imports: [HttpClientModule,SharedMaterialModule],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewExampleDialog3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
