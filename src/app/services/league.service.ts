import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token': 'f77c983c3bfa49689742d57e5d060e6f'
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  apiUrl = 'https://api.football-data.org/v2/';

  constructor(private http: HttpClient) { }

  getLeague(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}competitions/CL`, httpOptions);
  }

  getAllTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}competitions/CL/teams`, httpOptions);
  }

  getTeamById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}teams/${id}`, httpOptions);
  }

  getStandings(type: string): Observable<any> {
    httpOptions.params = httpOptions.params.set('standingType', type);
    return this.http.get<any>(`${this.apiUrl}competitions/CL/standings`, httpOptions);
  }

  getMatchs(stage?: string): Observable<any> {
    httpOptions.params = httpOptions.params.set('stage', stage);
    return this.http.get<any>(`${this.apiUrl}competitions/CL/matches`, httpOptions);
  }

  getMatchById(id: number): Observable<any> {
    httpOptions.params = new HttpParams();
    return this.http.get<any>(`${this.apiUrl}matches/${id}`, httpOptions);
  }

  getScorers(): Observable<any> {
    httpOptions.params = new HttpParams();
    return this.http.get<any>(`${this.apiUrl}competitions/CL/scorers`, httpOptions);
  }
}
