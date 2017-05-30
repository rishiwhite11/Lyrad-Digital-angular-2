import { MOCK_PLAYERS } from '../../common/players/mock-players';
import { Player } from '../../common/players/player';
import { RestApiService } from '../../common/restapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  listOfPlayers: Player[]
  selectedPlayer: Player
  constructor(private apiService : RestApiService) { }
  selectPlayer(player){
    this.selectedPlayer = player;
  }
  ngOnInit() {
    this.listOfPlayers = this.apiService.getListOfPlayers();
    
  }

}
