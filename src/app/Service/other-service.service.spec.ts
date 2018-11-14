import { TestBed } from '@angular/core/testing';

import { OtherServiceService } from './other-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('OtherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: OtherServiceService = TestBed.get(OtherServiceService);
    expect(service).toBeTruthy();
  });
});
