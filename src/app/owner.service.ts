import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from './owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = 'http://localhost:8080/owners';

  constructor(private http: HttpClient) { }

  //Get all owners (pagination)
  getPaginatedOwners(page: number, size: number) {
    return this.http.get<any>(`http://localhost:8080/owners?page=${page}&size=${size}`);
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
