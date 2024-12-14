import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../service/EvenementService';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent  implements OnInit {
  event: any = {}; // Objet pour stocker les données de l'événement
  eventId!: number; // ID de l'événement extrait de l'URL

  constructor(
    private route: ActivatedRoute,
    private eventService: EvenementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEvent();
  }

  // Charger les détails de l'événement
  loadEvent(): void {
    this.eventService.getEvenementById(this.eventId).subscribe(
      (data) => {
        this.event = data;
      },
      (error) => {
        console.error('Erreur lors du chargement de l\'événement', error);
      }
    );
  }

  // Méthode pour sauvegarder les modifications
  saveChanges(): void {
    this.eventService.updateEvenement(this.event).subscribe(
      () => {
        alert('Événement modifié avec succès.');
        this.router.navigate(['/events']); // Redirige vers la liste des événements
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'événement', error);
      }
    );
  }
}
