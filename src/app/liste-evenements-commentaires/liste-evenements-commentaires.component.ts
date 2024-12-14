import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/EvenementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-evenements-commentaires',
  templateUrl: './liste-evenements-commentaires.component.html',
  styleUrls: ['./liste-evenements-commentaires.component.css']
})
export class ListeEvenementsCommentairesComponent implements OnInit {
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
  

   
  
  }
  