import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches = JSON.parse(localStorage.getItem('matches'));

  constructor(public leagueService: LeagueService) { }

  ngOnInit() {
    if (!this.matches) {
      this.getMatches();
    }
    console.log(this.matches)
  }

  getMatches() {
    this.leagueService.getMatchs('SEMI_FINALS').subscribe(
      data => localStorage.setItem('matches', JSON.stringify(data.matches)),
      error => console.log(error),
    );
  }

}
