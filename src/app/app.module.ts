import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star/star.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { GameDetailGuard } from './game/game-detail.guard';

const routes = [{ path: 'welcome', component: WelcomeComponent },
{ path: 'games', component: GameListComponent },
{ path: 'games/:id', canActivate: [GameDetailGuard], component: GameDetailComponent },
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    StarComponent,
    ConvertToSpacePipe,
    GameDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
