import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTeam = JSON.parse(localStorage.getItem('homeFinalTeam'));
  awayTeam = JSON.parse(localStorage.getItem('awayFinalTeam'));
  finalMatch = JSON.parse(localStorage.getItem('finalMatch'));
  maxScorer = JSON.parse(localStorage.getItem('maxScorer'));
  teamScorer = JSON.parse(localStorage.getItem('teamScorer'));

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    if (!(this.homeTeam && this.awayTeam && this.finalMatch)) {
      this.getFinalMatch();
    }
    if (!this.teamScorer) {
      this.getMaxScorer();
    }
    console.log(this.homeTeam);
  }

  getFinalMatch() {
    let matchId: number;
    let homeTeamId: number;
    let awayTeamId: number;
    this.leagueService.getMatchs('FINAL').subscribe(
      data => {
                matchId = data.matches[0].id;
                homeTeamId = data.matches[0].homeTeam.id;
                awayTeamId = data.matches[0].awayTeam.id;
              },
      error => console.log(error),
      () => {
              this.leagueService.getMatchById(matchId).subscribe(
                data => { localStorage.setItem('finalMatch', JSON.stringify(data)); },
                error => console.error(error),
              );
              this.leagueService.getTeamById(homeTeamId).subscribe(
                data => { localStorage.setItem('homeFinalTeam', JSON.stringify(data)); },
                error => console.error(error),
              );
              this.leagueService.getTeamById(awayTeamId).subscribe(
                data => { localStorage.setItem('awayFinalTeam', JSON.stringify(data)); },
                error => console.error(error),
              );
            }
    );
  }

  getMaxScorer() {
    this.leagueService.getScorers().subscribe(
      data => {
                this.maxScorer = data.scorers[0];
              },
      error => console.log(error),
      () => {
              localStorage.setItem('maxScorer', JSON.stringify(this.maxScorer));
              this.leagueService.getTeamById(this.maxScorer.team.id).subscribe(
                data => this.teamScorer = data,
                error => console.log(error),
                () => {
                        localStorage.setItem('teamScorer', JSON.stringify(this.teamScorer));
                      },
              );
            },
    );
  }
}
