import { TestBed } from '@angular/core/testing';

import { SiteNoService } from './site-no.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SiteNoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SiteNoService = TestBed.get(SiteNoService);
    expect(service).toBeTruthy();
  });
});
