import { Component } from '@angular/core';
import { EvenementService } from '../service/EvenementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-evenements-artiste',
  templateUrl: './ajout-evenements-artiste.component.html',
  styleUrls: ['./ajout-evenements-artiste.component.css']
})
export class AjoutEvenementsArtisteComponent  {
 
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
          this.router.navigate(['/liste_evenment_artiste']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'événement :', error);
        }
      );
    }
  }

