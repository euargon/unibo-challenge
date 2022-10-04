import { TestBed } from '@angular/core/testing';

import { UniboPostsService } from './unibo-posts.service';

describe('UniboPostsService', () => {
  let service: UniboPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniboPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
