import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  loaded = false;
  homeTeamId: number;
  awayTeamId: number;
  homeTeam: any;
  awayTeam: any;
  finalMatchId: number;
  finalMatch: any;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.getTitleLeague();
    this.getFinalMatchData();
  }

  getTitleLeague() {
    this.leagueService.getLeague().subscribe(
      data => this.title = data.name,
      error => console.error(error),
      () => this.loaded = true,
    );
  }

  getFinalMatchData() {
    this.leagueService.getMatchs('2018', 'Final').subscribe(
      data => { this.finalMatchId = data.matches.id;
                console.log(data); },
      error => console.error(error),
    );
  }
}
