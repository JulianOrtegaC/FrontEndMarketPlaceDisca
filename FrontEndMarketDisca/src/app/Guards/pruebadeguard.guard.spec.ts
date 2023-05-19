import { TestBed } from '@angular/core/testing';

import { PruebadeguardGuard } from './pruebadeguard.guard';

describe('PruebadeguardGuard', () => {
  let guard: PruebadeguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PruebadeguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
