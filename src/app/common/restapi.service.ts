/**
 * New typescript file
 */
import { MOCK_PLAYERS } from './players/mock-players';
import { Player } from './players/player';
import { MOCK_TEAMS } from './teams/mock-teams';
import { Team } from './teams/team';
import { Injectable } from '@angular/core';
@Injectable()
export class RestApiService{
  getListOfPlayers(): Player[]{
    return MOCK_PLAYERS
  }
    
  getListOfTeams(): Team[]{
    return MOCK_TEAMS
  }  
}