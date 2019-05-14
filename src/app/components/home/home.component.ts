import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  loadedMatch = false;
  loadedAwayTeam = false;
  loadedHomeTeam = false;
  homeTeam: any[];
  awayTeam: any[];
  finalMatch: any[];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.getTitleLeague();
    this.getFinalMatch();
    this.getHomeTeam();
    this.getAwayTeam();
  }

  getTitleLeague() {
    this.leagueService.getLeague().subscribe(
      data => this.title = data.name,
      error => console.error(error),
    );
  }

  getFinalMatch() {
    this.leagueService.getMatchById(263562).subscribe(
      data => { this.finalMatch = data; },
      error => console.error(error),
      () => this.loadedMatch = true
    );
  }

  getHomeTeam() {
    this.leagueService.getTeamById(73).subscribe(
      data => { this.homeTeam = data; },
      error => console.error(error),
      () => this.loadedHomeTeam = true
    );
  }

  getAwayTeam() {
    this.leagueService.getTeamById(64).subscribe(
      data => { this.awayTeam = data; },
      error => console.error(error),
      () => this.loadedAwayTeam = true
    );
  }

}
