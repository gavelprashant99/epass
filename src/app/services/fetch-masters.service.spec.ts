import { TestBed } from '@angular/core/testing';

import { FetchMastersService } from './fetch-masters.service';

describe('FetchMastersService', () => {
  let service: FetchMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
