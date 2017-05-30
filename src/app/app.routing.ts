/**
 * New typescript file
 */

import { NotFoundComponent } from './not-found/not-found.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes , PreloadAllModules} from '@angular/router';

const routes : Routes = [
  
  {path: '', component: PlayerListComponent},
  {path: 'teams', loadChildren: 'app/teams/teams.module#TeamsModule'},
  {path: 'players', loadChildren: 'app/players/players.module#PlayersModule'}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
  
}