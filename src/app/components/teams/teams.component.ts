import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = JSON.parse(localStorage.getItem('teams'));

  constructor(public leagueService: LeagueService) { }

  ngOnInit() {
    if (!this.teams) {
      this.getTeams();
    }
    console.log(this.teams);
  }

  getTeams() {
    this.leagueService.getAllTeams().subscribe(
      data => localStorage.setItem('teams', JSON.stringify(data.teams)),
      error => console.log(error),
    );
  }

}
