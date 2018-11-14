import { TestBed } from '@angular/core/testing';

import { EquipControllerService } from './equip-controller.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EquipControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: EquipControllerService = TestBed.get(EquipControllerService);
    expect(service).toBeTruthy();
  });
});
