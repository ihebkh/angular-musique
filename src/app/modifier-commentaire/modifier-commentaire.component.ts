import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from '../service/CommentaireService ';

@Component({
  selector: 'app-modifier-commentaire',
  templateUrl: './modifier-commentaire.component.html',
  styleUrls: ['./modifier-commentaire.component.css']
})
export class ModifierCommentaireComponent implements OnInit {
  commentaire: any = {}; // Comment to modify
  id: number = 0;

  constructor(
    private commentaireService: CommentaireService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.fetchCommentaire();
  }

  // Fetch the specific comment by ID
  fetchCommentaire(): void {
    this.commentaireService.getCommentaireById(this.id).subscribe(
      (data) => {
        this.commentaire = data;
      },
      (error) => {
        console.error('Error fetching comment:', error);
      }
    );
  }

  // Save the updated comment
  saveChanges(): void {
    this.commentaireService.addCommentaire(this.commentaire).subscribe(
      () => {
        alert('Comment updated successfully');
        this.router.navigate(['/liste-commentaire']); // Redirect back to the list
      },
      (error) => {
        console.error('Error updating comment:', error);
      }
    );
  }
}
