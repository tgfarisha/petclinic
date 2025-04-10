import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, Observable } from 'rxjs';
import { Owner } from './owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = 'http://localhost:8080/owners';

  constructor(private http: HttpClient) { }

  //Get all owners
  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  //Search owner by last name
  searchOwnerByLastname(lastName: string): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/search?lastName=${lastName}`);
  }

  //Get owner by ID
  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/${id}`);
  }

  //Create owner
  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  //Update owner
  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.apiUrl}/${id}`, owner);
  }
}
