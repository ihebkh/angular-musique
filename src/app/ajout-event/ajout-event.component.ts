import { Component } from '@angular/core';
import { EvenementService } from '../service/EvenementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrls: ['./ajout-event.component.css']
})
export class AjoutEventComponent {
 
    evenement = {
      nom_Evenement: '',
      date_evenemnets: '',
      lieu_evenements: '',
    };
  
    constructor(private evenementService: EvenementService, private router: Router) {}
  
    onSubmit(): void {
      this.evenementService.addEvenement(this.evenement).subscribe(
        (response) => {
          console.log('Événement ajouté avec succès :', response);
          // Redirigez vers une autre page ou affichez un message de succès
          this.router.navigate(['/liste-evenements']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'événement :', error);
        }
      );
    }
  }

