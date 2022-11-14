import { TestBed } from '@angular/core/testing';

import { AdduserGuard } from './adduser.guard';

describe('AdduserGuard', () => {
  let guard: AdduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
