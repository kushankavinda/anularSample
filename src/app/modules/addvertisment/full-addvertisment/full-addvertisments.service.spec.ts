import { TestBed } from '@angular/core/testing';

import { FullAddvertismentsService } from './full-addvertisments.service';

describe('FullAddvertismentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullAddvertismentsService = TestBed.get(FullAddvertismentsService);
    expect(service).toBeTruthy();
  });
});
