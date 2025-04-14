import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from './visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private baseUrl = 'http://localhost:8080/owners';

  constructor(private http: HttpClient) { }

  getVisits(ownerId: number, petId: number): Observable<Visit[]> {
    return this.http.get<Visit[]>(`${this.baseUrl}/${ownerId}/pets/${petId}`);
  }

  addVisit(ownerId: number, petId: number, visit: Visit): Observable<any> {
    return this.http.post(`http://localhost:8080/owners/${ownerId}/pets/${petId}/visits`, visit);
  }
  
}
