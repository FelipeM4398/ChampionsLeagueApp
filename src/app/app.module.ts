import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, 
         MatTableModule, MatExpansionModule, MatGridListModule } from '@angular/material';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { ScorersComponent } from './components/scorers/scorers.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesComponent } from './components/matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupsComponent,
    HomeComponent,
    ScorersComponent,
    TeamsComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule, MatTableModule,
    AppRoutingModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatIconModule,
    MatExpansionModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
