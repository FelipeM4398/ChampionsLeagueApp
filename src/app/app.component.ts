import { Component, OnInit } from '@angular/core';
import { LeagueService } from './services/league.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  league: any;
  loaded = false;

  constructor(private apiService: LeagueService) { }

  ngOnInit(): void {
    this.getLeague();
  }

  getLeague() {
    this.apiService.getLeague().subscribe(
      data => this.league = data,
      error => console.log(error),
      () => { this.loaded = true; console.log(this.league); }
    );
  }
}
