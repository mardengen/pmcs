import { TestBed } from '@angular/core/testing';

import { InsertFormService } from './insert-form.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('InsertFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: InsertFormService = TestBed.get(InsertFormService);
    expect(service).toBeTruthy();
  });
});
