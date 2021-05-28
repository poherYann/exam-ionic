import { TestBed } from '@angular/core/testing';

import { ArtspotService } from './artspot.service';

describe('ArtspotService', () => {
  let service: ArtspotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtspotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
