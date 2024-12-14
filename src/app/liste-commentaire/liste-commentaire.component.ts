import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../service/CommentaireService ';

@Component({
  selector: 'app-liste-commentaire',
  templateUrl: './liste-commentaire.component.html',
  styleUrls: ['./liste-commentaire.component.css']
})
export class ListeCommentaireComponent implements OnInit {
  commentaires: any[] = []; // List of comments

  constructor(private commentaireService: CommentaireService) {}

  ngOnInit(): void {
    this.fetchCommentaires();
  }

  // Fetch all comments
  fetchCommentaires(): void {
    this.commentaireService.getAllCommentaires().subscribe(
      (data) => {
        this.commentaires = data;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  // Delete a comment
  deleteCommentaire(id: number): void {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.commentaireService.deleteCommentaire(id).subscribe(
        () => {
          this.commentaires = this.commentaires.filter((comment) => comment.idCommentaire !== id);
          alert('Comment deleted successfully');
        },
        (error) => {
          console.error('Error deleting comment:', error);
        }
      );
    }
  }
}
