import { TestBed } from '@angular/core/testing';

import { SaleBSerService } from './sale-bser.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaleBSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SaleBSerService = TestBed.get(SaleBSerService);
    expect(service).toBeTruthy();
  });
});
