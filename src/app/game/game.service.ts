import { Injectable } from '@angular/core';
import { IGame } from './IGame';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public getGames(): IGame[]{
    return [
      {
        'gameId': '1',
        'gameImgUrl': './assets/img/game.gif',
        'players': 'Dip - Mihir',
        'result': '0 - 1',
        'pgnUrl': 'not available',
        'date': new Date(),
        'prize': 50000,
        'rating': 5
      },
      {
        'gameId': '2',
        'gameImgUrl': './assets/img/game.gif',
        'players': 'Dip - Vivek',
        'result': '1 - 0',
        'pgnUrl': 'not available',
        'date': new Date(),
        'prize': 80000,
        'rating': 3
      }
    ];
  }
}
