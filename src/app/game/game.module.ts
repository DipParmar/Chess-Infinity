import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameDetailComponent
  ],
  imports: [
    FormsModule,
    GameRoutingModule,
    SharedModule
  ],
  exports: []
})
export class GameModule { }
