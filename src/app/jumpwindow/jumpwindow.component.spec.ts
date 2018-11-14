import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpwindowComponent } from './jumpwindow.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('JumpwindowComponent', () => {
  let component: JumpwindowComponent;
  let fixture: ComponentFixture<JumpwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpwindowComponent ],
      imports: [HttpClientModule,RouterTestingModule],
      providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
