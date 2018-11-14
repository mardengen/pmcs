import { TestBed } from '@angular/core/testing';

import { PRTypeCodeService } from './prtype-code.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PRTypeCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PRTypeCodeService = TestBed.get(PRTypeCodeService);
    expect(service).toBeTruthy();
  });
});
