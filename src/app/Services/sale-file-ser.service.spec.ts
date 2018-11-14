import { TestBed } from '@angular/core/testing';

import { SaleFileSerService } from './sale-file-ser.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaleFileSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SaleFileSerService = TestBed.get(SaleFileSerService);
    expect(service).toBeTruthy();
  });
});
