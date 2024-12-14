import { Component } from '@angular/core';
import { AuthService } from '../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
  newUser = {
    name: '',
    email: '',
    password: '',
    role: 'Admin' // Rôle par défaut
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.addUser(this.newUser).subscribe(
      (response) => {
        console.log('Utilisateur ajouté avec succès :', response);
        alert('Utilisateur ajouté avec succès !');
        
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        alert('Erreur lors de l\'ajout de l\'utilisateur.');
      }
    );
  }
}