import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private baseUrl = 'http://localhost:8089/musique/Evenements';


  constructor(private http: HttpClient) {}

 
  getEvenements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieve-all-events`);
  }

  addEvenement(evenement: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-Evenement`, evenement);
  }

  deleteEvenement(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-Evenement/${eventId}`);
  }

  updateEvenement(event: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/modify-Evenement`, event, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  getEvenementById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieve-Evenement/${id}`);
  }
  assignUserToEvent(eventId: number, userId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecter/${eventId}`, userId, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  
}