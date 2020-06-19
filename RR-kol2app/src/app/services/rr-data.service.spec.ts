import { TestBed } from '@angular/core/testing';

import { RRDataService } from './rr-data.service';

describe('RRDataService', () => {
  let service: RRDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RRDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
