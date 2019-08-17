import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
