import { TestBed } from '@angular/core/testing';

import { FINService } from './fin.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('FINService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]

  }));

  it('should be created', () => {
    const service: FINService = TestBed.get(FINService);
    expect(service).toBeTruthy();
  });
});
