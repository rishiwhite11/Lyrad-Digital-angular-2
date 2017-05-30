/**
 * New typescript file
 */


import { SharedModule } from '../common/common.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamsRoutingModule } from './teams.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TeamEditComponent } from './team-edit/team-edit.component';
@NgModule({
  declarations: [TeamListComponent, TeamEditComponent],
  imports: [ FormsModule, TeamsRoutingModule, CommonModule, SharedModule]
})
export class TeamsModule{
  
}