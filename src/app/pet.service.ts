import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private baseUrl = 'http://localhost:8080/owners';

  constructor(private http: HttpClient) { }

  //Get pets for a specific owner
  getPetsOwnerId(ownerId: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.baseUrl}/${ownerId}/pets`);
  }

  //Get a pet by ID
  getPetById(ownerId: number, petId: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/${ownerId}/pets/${petId}`);
  }

  //Add a pet
  addPet(ownerId: number, pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.baseUrl}/${ownerId}/pets`, pet);
  }

  //Update a pet
  updatePet (ownerId: number, petId: number, pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseUrl}/${ownerId}/pets/${petId}`, pet)
  }
}
