import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {
  utilisateur: any = {
    idutilisateur: null,
    nom_utilisateur: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'ID de l'utilisateur depuis l'URL
    this.authService.getUserById(userId).subscribe(
      (data) => {
        this.utilisateur = data; // Charger les données de l'utilisateur
      },
      (error) => {
        console.error('Erreur lors du chargement de l\'utilisateur :', error);
      }
    );
  }

  onUpdate(): void {
    this.authService.updateUser(this.utilisateur).subscribe(
      () => {
        alert('Utilisateur mis à jour avec succès.');
        this.router.navigate(['/liste-utilisateurs']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
      }
    );
  }
  
}
