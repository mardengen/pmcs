import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from './share.module';
import { MatPaginator } from '@angular/material';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule,SharedMaterialModule],
    providers:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
