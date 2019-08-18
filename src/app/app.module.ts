import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
