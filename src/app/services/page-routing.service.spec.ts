import { TestBed } from '@angular/core/testing';

import { PageRoutingService } from './page-routing.service';

describe('PageRoutingService', () => {
  let service: PageRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
