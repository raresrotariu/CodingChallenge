import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planets } from '../Model/Planets';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  private url = "https://localhost:7037/api/Standard";

  constructor(private http: HttpClient) { }

  public GetPlanets() : Observable<Planets[]> {
    return this.http.get<Planets[]>(`${this.url}`);
  }

}
