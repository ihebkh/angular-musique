import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentaireService {
  private apiUrl = 'http://localhost:8089/musique/Commentaire'; // URL de base du backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les commentaires
  getAllCommentaires(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieve-all-Commentaire`);
  }

  // Ajouter un commentaire
  addCommentaire(commentaire: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-commentaire`, commentaire);
  }

  // Supprimer un commentaire
  deleteCommentaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-commentaire/${id}`);
  }

  // Récupérer un commentaire par ID
  getCommentaireById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/retrieve-Commentaire/${id}`);
  }
}
