import { TestBed } from '@angular/core/testing';

import { FlightSearchResultService } from './flight-search-result.service';

describe('FlightSearchResultService', () => {
  let service: FlightSearchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSearchResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
