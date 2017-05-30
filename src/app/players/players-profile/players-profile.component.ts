import { Player } from '../../common/players/player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players-profile',
  templateUrl: './players-profile.component.html',
  styleUrls: ['./players-profile.component.css']
})
export class PlayersProfileComponent implements OnInit {
  @Input() selectedPlayer: Player
  constructor() { 
   
  }

  ngOnInit() {
  }

}
