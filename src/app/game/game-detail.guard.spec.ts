import { TestBed, async, inject } from '@angular/core/testing';

import { GameDetailGuard } from './game-detail.guard';

describe('GameDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameDetailGuard]
    });
  });

  it('should ...', inject([GameDetailGuard], (guard: GameDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
