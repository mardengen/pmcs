import { TestBed } from '@angular/core/testing';

import { UploaderService } from './uploader.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UploaderService = TestBed.get(UploaderService);
    expect(service).toBeTruthy();
  });
});
