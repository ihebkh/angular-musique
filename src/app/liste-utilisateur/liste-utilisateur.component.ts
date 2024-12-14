import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {
  users: any[] = []; // Liste des utilisateurs

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers(); // Charger les utilisateurs au démarrage
  }

  // Charger la liste des utilisateurs
  loadUsers(): void {
    this.authService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      }
    );
  }

  // Supprimer un utilisateur
  deleteUser(userId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.authService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter((user) => user.idutilisateur !== userId);
        },
        (error) => {
          console.error('Erreur lors de la suppression de l’utilisateur :', error);
        }
      );
    }
  }

  // Naviguer vers la page de modification d'utilisateur
  editUser(userId: number): void {
    this.router.navigate(['/modifier-utilisateur', userId]);
  }

  // Naviguer vers la page d'ajout d'utilisateur
  goToAddUser(): void {
    this.router.navigate(['/ajouter-utilisateur']);
  }
  
  
}
