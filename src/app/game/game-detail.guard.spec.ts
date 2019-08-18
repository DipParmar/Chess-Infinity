import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule} from '@angular/common/http';

import { GameDetailGuard } from './game-detail.guard';

describe('GameDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [GameDetailGuard]
    });
  });

  it('should ...', inject([GameDetailGuard], (guard: GameDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
