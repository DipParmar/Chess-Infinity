import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGame } from './IGame';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private GAME_URL = 'api/games/games.json';

  constructor(private httpClient: HttpClient) { }

  public getGames(): Observable<IGame[]> {
    this.getGameData();
    return this.httpClient.get<IGame[]>(this.GAME_URL).pipe(
      tap(game => { console.log(game); }),
      catchError(this.handleError)
    );
  }

  public getGame(gameId): Observable<IGame> {
    return this.getGames().pipe(map((games: IGame[]) => games.find(g => g.gameId === gameId)));
  }

  public getGameData(): void {
    this.httpClient.get('http://localhost:3000/games').pipe(
      tap(data => {console.log(data);})
      ).subscribe();
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
