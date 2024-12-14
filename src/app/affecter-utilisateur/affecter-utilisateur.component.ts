import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/AuthService';
import { EvenementService } from '../service/EvenementService';

@Component({
  selector: 'app-affecter-utilisateur',
  templateUrl: './affecter-utilisateur.component.html',
  styleUrls: ['./affecter-utilisateur.component.css']
})
export class AffecterUtilisateurComponent implements OnInit {
  eventId!: number;
  utilisateurs: any[] = [];
  selectedUserId!: number;

  constructor(
    private eventService: EvenementService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('eventId')!;
    this.loadUtilisateurs();
  }

  loadUtilisateurs(): void {
    this.authService.getUsers().subscribe(
      (data) => {
        this.utilisateurs = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs', error);
      }
    );
  }

  onAffecter(): void {
    this.eventService.assignUserToEvent(this.eventId, this.selectedUserId).subscribe(
      () => {
        alert('Utilisateur affecté avec succès');
        this.router.navigate(['/liste-event_admin']);
      },
      (error) => {
        console.error('Erreur lors de l\'affectation', error);
      }
    );
  }
}
