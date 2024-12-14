import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/EvenementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-inscriptions-participant',
  templateUrl: './liste-inscriptions-participant.component.html',
  styleUrls: ['./liste-inscriptions-participant.component.css']
})
export class ListeInscriptionsParticipantComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EvenementService, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  // Charger les événements depuis le backend
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

  // Naviguer vers le composant d'affectation
  onParticipate(eventId: number): void {
    this.router.navigate(['/affecter-utilisateur', eventId]);
  }
}
