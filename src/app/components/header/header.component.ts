import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  league: any;
  loaded = false;
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private apiService: LeagueService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 36rem)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.getLeague();
  }

  ngOnDestroy() {
  }

  getLeague() {
    this.apiService.getLeague().subscribe(
      data => this.league = data,
      error => console.log(error),
      () => { this.loaded = true; console.log(this.league); }
    );
  }

}
