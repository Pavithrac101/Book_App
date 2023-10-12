import { TestBed } from '@angular/core/testing';

import { DeauthgaurdGuard } from './deauthgaurd.guard';

describe('DeauthgaurdGuard', () => {
  let guard: DeauthgaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeauthgaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
