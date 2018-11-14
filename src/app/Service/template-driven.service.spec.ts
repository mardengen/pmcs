import { TestBed } from '@angular/core/testing';

import { TemplateDrivenService } from './template-driven.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TemplateDrivenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TemplateDrivenService = TestBed.get(TemplateDrivenService);
    expect(service).toBeTruthy();
  });
});
