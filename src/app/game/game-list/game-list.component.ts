import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ci-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.sass']
})
export class GameListComponent implements OnInit {

  public componentTitle: string = 'Game List';
  public imgWidth: number = 50;
  public imgHeight: number = 50;
  public showImage: boolean = true;
  public listFilter: string = '';

  public games: any[] = [
    {
      'gameId': '1',
      'gameImgUrl': './assets/img/game.gif',
      'players': 'Dip - Mihir',
      'result': '0 - 1',
      'pgnUrl': 'not available',
      'date': new Date(),
      'prize': 50000,
      'rating': 3
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

  constructor() { }

  ngOnInit() {
  }

  toggleImage(index: number) {
    this.showImage = !this.showImage;
  }

}
