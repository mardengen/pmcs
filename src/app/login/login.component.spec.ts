import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let component: TestingComponent;
  // let fixture: ComponentFixture<TestingComponent>;
  // const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [HttpClientTestingModule,HttpClientModule,SharedMaterialModule,ReactiveFormsModule,RouterTestingModule],
      providers:[HttpClientTestingModule]
      // declarations: [ SaleaComponent,MatSort,FormGroup ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // component.loginForm = formBuilder.group({
//       component.loginForm = this.formBuilder.group({
//         email: ['', Validators.required],
//         password: ['', Validators.required]

// });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
