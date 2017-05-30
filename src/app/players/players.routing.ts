import { PlayerListComponent } from './player-list/player-list.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'

const routes : Routes = [
{path: '', component: PlayerListComponent},
{path: 'register/player', component: RegistrationComponent},  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule{
  
}