import { TestBed } from '@angular/core/testing';

import { GetSiteListService } from './get-site-list.service';
import { MatSort, MatPaginator } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { SharedMaterialModule } from './share.module';

describe('GetSiteListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // declarations: [  ],
    imports: [HttpClientModule,SharedMaterialModule],
    providers:[HttpClientTestingModule]
  }));
var tt;
'use strict';
var $http;
  it('should be created', () => {
    const service: GetSiteListService = TestBed.get(GetSiteListService);
    expect(service).toBeTruthy();
  });
});
