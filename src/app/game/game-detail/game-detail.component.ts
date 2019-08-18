import { Component, OnInit } from '@angular/core';
import { IGame } from '../IGame';

@Component({
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public game: IGame = null;

  constructor() {
  }

  ngOnInit() {
  }

  back(){

  }

}
