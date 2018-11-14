import { TestBed } from '@angular/core/testing';

import { FormNoService } from './form-no.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('FormNoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: FormNoService = TestBed.get(FormNoService);
    expect(service).toBeTruthy();
  });
});
