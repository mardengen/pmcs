import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UserServiceService = TestBed.get(UserServiceService);
    expect(service).toBeTruthy();
  });
});
