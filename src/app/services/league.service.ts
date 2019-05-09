import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Auth-Token': 'f77c983c3bfa49689742d57e5d060e6f'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  apiUrl = 'https://api.football-data.org/v2/';

  constructor(private http: HttpClient) { }

  getLeague(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'competitions/CL', httpOptions);
  }
}
