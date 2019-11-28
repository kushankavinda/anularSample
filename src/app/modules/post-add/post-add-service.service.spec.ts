import { TestBed } from '@angular/core/testing';

import { PostAddServiceService } from './post-add-service.service';

describe('PostAddServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostAddServiceService = TestBed.get(PostAddServiceService);
    expect(service).toBeTruthy();
  });
});
