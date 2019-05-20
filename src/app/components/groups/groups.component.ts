import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups = JSON.parse(localStorage.getItem('standings'));
  displayedColumns: string[] = ['Team', 'PG', 'W', 'D', 'L', 'Pts'];

  constructor(public leagueService: LeagueService) { }

  ngOnInit() {
    if (!this.groups) {
      this.getStandings();
    }
    console.log(this.groups);
  }

  getStandings() {
    this.leagueService.getStandings('TOTAL').subscribe(
      data => { console.log(data.standings);
                localStorage.setItem('standings', JSON.stringify(data.standings)); }
    );
  }

}
