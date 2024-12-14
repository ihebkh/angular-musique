import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8089/musique/Utilisateur';

  constructor(private http: HttpClient) {}

 login(email: string, password: string): Observable<{ role: string }> {
  const loginData = { email, password };
  return this.http.post<{ role: string }>(`${this.baseUrl}/login`, loginData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

getUsers(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/retrieve-all-users`).pipe(
    catchError((error) => {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      return throwError(() => error);
    })
  );
}


  // Supprimer un utilisateur
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove-user/${userId}`);
  }

  // Récupérer un utilisateur par ID
  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieve-Utilisateur/${userId}`);
  }

  // Mettre à jour un utilisateur
  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/modify-user`, user);
  }

  // Ajouter un utilisateur
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-user`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
