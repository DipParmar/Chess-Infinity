import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameDetailGuard } from './game-detail.guard';

const routes: Routes = [
{ path: 'games', component: GameListComponent },
{ path: 'games/:id', canActivate: [GameDetailGuard], component: GameDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
