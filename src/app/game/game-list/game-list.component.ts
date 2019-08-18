import { Component, OnInit } from '@angular/core';
import { IGame } from '../IGame';
import { GameService } from '../game.service';

@Component({
  selector: 'ci-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public componentTitle: string = 'Game List';
  public imgWidth: number = 50;
  public imgHeight: number = 50;
  public showImage: boolean = true;
  public filteredGames: IGame[] = [];
  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredGames = this.listFilter ? this.performFilter(this.listFilter) : this.games;
  }

  public games: IGame[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.filteredGames = this.games;
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

}
