import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  league: any;
  loaded = false;

  constructor(private apiService: LeagueService) { }

  ngOnInit() {
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
