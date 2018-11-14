import { TestBed } from '@angular/core/testing';

import { SaleASerService } from './sale-aser.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SaleASerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SaleASerService = TestBed.get(SaleASerService);
    expect(service).toBeTruthy();
  });
});
