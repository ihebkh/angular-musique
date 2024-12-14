import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../service/CommentaireService ';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent implements OnInit {
  commentaire = {
    contenu: '',
    date_commentaire: new Date().toISOString(),
    evenement: {
      idevenement: 0
    }
  };

  constructor(
    private commentaireService: CommentaireService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupère l'ID de l'événement depuis l'URL
    this.commentaire.evenement.idevenement = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit(): void {
    this.commentaireService.addCommentaire(this.commentaire).subscribe(
      (response) => {
        console.log('Commentaire ajouté avec succès :', response);
        this.router.navigate(['/liste-evenements-commentaires']); // Redirection après ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    );
  }
}