import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlistComponent } from './gridlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedMaterialModule } from '../share.module';

describe('GridlistComponent', () => {
  let component: GridlistComponent;
  let fixture: ComponentFixture<GridlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlistComponent ],
      imports: [HttpClientModule,SharedMaterialModule],
      providers:[HttpClientTestingModule]

      // declarations: [ SaleaComponent,MatSort ],
      // imports: [HttpClientModule,FormBuilder,SharedMaterialModule,MatPaginator],
      // providers:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
