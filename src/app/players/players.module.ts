/**
 * New typescript file
 */

import { SharedModule } from '../common/common.module';
import { PlayersRoutingModule } from './players.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayersProfileComponent } from './players-profile/players-profile.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  imports: [CommonModule, FormsModule, PlayersRoutingModule, SharedModule],
  declarations: [PlayerListComponent, PlayersProfileComponent, RegistrationComponent]
})
export class PlayersModule{
  
}