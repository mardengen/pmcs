import { TestBed } from '@angular/core/testing';

import { BuyerService } from './buyer.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('BuyerService', () => {
  let service;
  // beforeEachProviders(()=>[BuyerService]);

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BuyerService = TestBed.get(BuyerService);
    expect(service).toBeTruthy();
    let names=service.getHeroes();

  });
});
