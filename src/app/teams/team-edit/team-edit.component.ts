import { Team } from '../../common/teams/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  @Input() editTeam: Team;
  constructor() { }

  ngOnInit() {
  }
  saveTeam(){
    this.editTeam = null;
  }
}
