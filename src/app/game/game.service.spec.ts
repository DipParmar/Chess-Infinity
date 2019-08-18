import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientModule
  ]}));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
