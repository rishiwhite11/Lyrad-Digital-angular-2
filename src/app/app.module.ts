import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TeamListComponent } from './teams/team-list/team-list.component';
import {PlayersModule} from './players/players.module'
import {PlayerListComponent} from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamsModule } from './teams/teams.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlayersModule,
    TeamsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
