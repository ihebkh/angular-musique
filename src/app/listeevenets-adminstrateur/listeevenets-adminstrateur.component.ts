import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from '../service/EvenementService';

@Component({
  selector: 'app-listeevenets-adminstrateur',
  templateUrl: './listeevenets-adminstrateur.component.html',
  styleUrls: ['./listeevenets-adminstrateur.component.css']
})
export class ListeevenetsAdminstrateurComponent implements OnInit {
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
