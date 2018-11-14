import { TestBed, inject } from '@angular/core/testing';

import { CustomerSerService } from './customer-ser.service';
import { OPEC_PRTYPE_BUYER } from '../models/OPEC_PRTYPE_BUYER';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let service;
describe('CustomerSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));
  beforeEach(inject([CustomerSerService],s=>{
    service=s;
  }));
  it('should be created', () => {
    const service: CustomerSerService = TestBed.get(CustomerSerService);
    expect(service).toBeTruthy();
  });
  it('should be returned', () => {
    let  str:OPEC_PRTYPE_BUYER = service.getHeroNo404(1);
    expect(service).toBeTruthy();
  });
});
