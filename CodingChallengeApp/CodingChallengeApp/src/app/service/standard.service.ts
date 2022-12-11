import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Captain } from '../Model/Captain';
import { Planets } from '../Model/Planets';
import { Robots } from '../Model/Robots';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  private url = "https://localhost:7037/api/Standard";

  constructor(private http: HttpClient) { }

  public GetPlanets() : Observable<Planets[]> {
    return this.http.get<Planets[]>(`${this.url}`);
  }

  public GetRobots(planetId:number):  Observable<Robots[]> {
    return this.http.post<Robots[]>(`${this.url}/GetRobots`,planetId);
  }

  public GetCaptain():  Observable<Captain[]> {
    return this.http.get<Captain[]>(`${this.url}/Captain`);
  }

  public UpdatePlanet(planets: Planets) : Observable<Planets> {
    return this.http.post<Planets>(`${this.url}/UpdatePlanet`,planets);
  }

}
