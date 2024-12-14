import { Component } from '@angular/core';
import { AuthService } from '../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = ''; // Pour afficher les messages d'erreur

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Réponse API :', response);
  
        // Extraire le rôle depuis la réponse
        const role: string = response.role;
  
        // Rediriger selon le rôle
        if (role === 'Artiste') {
          this.router.navigate(['/liste_evenment_artiste']);
        } else if (role === 'Participant') {
          this.router.navigate(['/liste-evenements-commentaires']);
        } else if (role === 'Admin') {
          this.router.navigate(['/liste-evenements']);
        } else {
          this.errorMessage = 'Rôle inconnu. Contactez un administrateur.';
        }
      },
      (error) => {
        console.error('Erreur HTTP:', error);
        this.errorMessage = 'Email ou mot de passe incorrect.';
      }
    );
  }
  
}
