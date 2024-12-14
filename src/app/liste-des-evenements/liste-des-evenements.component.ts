import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/EvenementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-des-evenements',
  templateUrl: './liste-des-evenements.component.html',
  styleUrls: ['./liste-des-evenements.component.css']
})
export class ListeDesEvenementsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EvenementService, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  // Charger les événements
  loadEvents(): void {
    this.eventService.getEvenements().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des événements', error);
      }
    );
  }

  // Rediriger vers la page d'ajout d'événement
  goToNewEvent(): void {
    this.router.navigate(['/new-event']);
  }

  // Méthode pour supprimer un événement
  deleteEvent(eventId: number): void {
    if (!eventId) {
      console.error('Erreur : ID de l\'événement non défini.');
      return;
    }

    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      this.eventService.deleteEvenement(eventId).subscribe(
        () => {
          this.events = this.events.filter(event => event.idevenement !== eventId);
          alert('Événement supprimé avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'événement', error);
        }
      );
    }
  }
  editEvent(eventId: number): void {
    if (!eventId) {
      console.error('Erreur : ID de l\'événement non défini.');
      return;
    }
    this.router.navigate(['/edit-event', eventId]); // Navigue vers le composant de modification
  }
}
