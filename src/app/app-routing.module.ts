import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListeDesEvenementsComponent } from './liste-des-evenements/liste-des-evenements.component';
import { AjoutEventComponent } from './ajout-event/ajout-event.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListeEvenementsCommentairesComponent } from './liste-evenements-commentaires/liste-evenements-commentaires.component';
import { AjouterCommentaireComponent } from './ajouter-commentaire/ajouter-commentaire.component';
import { ListeCommentaireComponent } from './liste-commentaire/liste-commentaire.component';
import { ModifierCommentaireComponent } from './modifier-commentaire/modifier-commentaire.component';
import { ListeevenetsAdminstrateurComponent } from './listeevenets-adminstrateur/listeevenets-adminstrateur.component';
import { AjoutEvenementsArtisteComponent } from './ajout-evenements-artiste/ajout-evenements-artiste.component';
import { ListeEvenementsArtisteComponent } from './liste-evenements-artiste/liste-evenements-artiste.component';
import { ModifierEventComponent } from './modifier-event/modifier-event.component';
import { AffecterUtilisateurComponent } from './affecter-utilisateur/affecter-utilisateur.component';
import { ListeInscriptionsParticipantComponent } from './liste-inscriptions-participant/liste-inscriptions-participant.component';
import { AjouterParticipantParticpantComponent } from './ajouter-participant-particpant/ajouter-participant-particpant.component';
import { AdminstrateurComponentComponent } from './adminstrateur-component/adminstrateur-component.component';
import { ParticipantComponentComponent } from './participant-component/participant-component.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'liste-evenements', component: ListeDesEvenementsComponent },
  { path: 'new-event', component: AjoutEventComponent },
  { path: 'modifier-utilisateur/:id', component: ModifierUtilisateurComponent },
  { path: 'liste-users', component: ListeUtilisateurComponent },
  { path: 'ajouter-utilisateur', component: AddNewUserComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: 'liste-evenements-commentaires', component: ListeEvenementsCommentairesComponent },
  { path: 'ajouter-commentaire/:id', component: AjouterCommentaireComponent },
  { path: 'liste-commentaire', component: ListeCommentaireComponent },
  { path: 'modifier-commentaire/:id', component: ModifierCommentaireComponent },
  { path: 'liste-event_admin', component: ListeevenetsAdminstrateurComponent },
  { path: 'ajout_evenment_artiste', component: AjoutEvenementsArtisteComponent },
  { path: 'liste_evenment_artiste', component: ListeEvenementsArtisteComponent },
  { path: 'edit-event-artist/:id', component: ModifierEventComponent },
  { path: 'affecter-utilisateur/:eventId', component: AffecterUtilisateurComponent },
  { path: 'liste_inscription_particpant', component: ListeInscriptionsParticipantComponent },
  { path: 'ajouter_particant_particpe:eventId', component: AjouterParticipantParticpantComponent },
  { path: 'admin', component: AdminstrateurComponentComponent },
  { path: 'participant', component: ParticipantComponentComponent },

  



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }