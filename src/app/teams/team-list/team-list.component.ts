import { RestApiService } from '../../common/restapi.service';
import { MOCK_TEAMS } from '../../common/teams/mock-teams';
import { Team } from '../../common/teams/team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  listOfTeams: Team[];
  selectedTeam: Team;
  
  constructor(private apiService : RestApiService) { }
  setSelectedTeam(team){
    this.selectedTeam = team;
  }
  ngOnInit() {
    //console.warn(this.apiService.getListOfTeams());
    this.listOfTeams = this.apiService.getListOfTeams();
  }

}
