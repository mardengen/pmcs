import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3Component } from './demo3.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';

describe('Demo3Component', () => {
  let component: Demo3Component;
  let fixture: ComponentFixture<Demo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo3Component ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
