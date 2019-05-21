import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-scorers',
  templateUrl: './scorers.component.html',
  styleUrls: ['./scorers.component.css']
})
export class ScorersComponent implements OnInit {

  scorers = JSON.parse(localStorage.getItem('scorers'));

  constructor(public leagueService: LeagueService) { }

  ngOnInit() {
    if (!this.scorers) {
      this.getScorers();
    }
    console.log(this.scorers);
  }

  getScorers() {
    this.leagueService.getScorers().subscribe(
      data => localStorage.setItem('scorers', JSON.stringify(data.scorers)),
      error => console.log(error)
    );
  }
}
