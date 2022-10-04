import { TestBed } from '@angular/core/testing';

import { UniboUtilsService } from './unibo-utils.service';

describe('UniboUtilsService', () => {
  let service: UniboUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniboUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
