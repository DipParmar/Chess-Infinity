import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from '../IGame';
import { GameService } from '../game.service';

@Component({
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public game: IGame = null;
  private gameId: string;

  constructor(private router: Router, private route: ActivatedRoute, private gameService: GameService) {
  }

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(this.gameId).subscribe(game => {
      this.game = game;
    });
  }

  back() {
    this.router.navigate(['/games']);
  }

}
