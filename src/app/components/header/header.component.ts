import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  league = JSON.parse(localStorage.getItem('leagueData'));
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private apiService: LeagueService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 36rem)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    if (!this.league) {
      this.getLeague();
    }
  }

  getLeague() {
    this.apiService.getLeague().subscribe(
      data => localStorage.setItem('leagueData', JSON.stringify(data)),
      error => console.log(error),
    );
  }

}
