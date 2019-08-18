import { Component, OnInit, OnDestroy } from '@angular/core';
import { IGame } from '../IGame';
import { GameService } from '../game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ci-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {

  public componentTitle = 'Game List';
  public imgWidth = 50;
  public imgHeight = 50;
  public showImage = true;
  public filteredGames: IGame[] = [];

  private listFilterData = '';
  private games$: Subscription;

  get listFilter(): string {
    return this.listFilterData;
  }

  set listFilter(value: string) {
    this.listFilterData = value;
    this.filteredGames = this.listFilter ? this.performFilter(this.listFilter) : this.games;
  }

  public games: IGame[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.games$ = this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.filteredGames = this.games;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  toggleImage(index: number): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IGame[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.games.filter((game: IGame) =>
      game.players.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }

  ngOnDestroy() {
    this.games$.unsubscribe();
  }

}
