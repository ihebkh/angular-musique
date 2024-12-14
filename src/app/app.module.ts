import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ListeDesEvenementsComponent } from './liste-des-evenements/liste-des-evenements.component';
import { LoginComponent } from './login/login.component';
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
import { ListeEvenementsArtisteComponent } from './liste-evenements-artiste/liste-evenements-artiste.component';
import { AjoutEvenementsArtisteComponent } from './ajout-evenements-artiste/ajout-evenements-artiste.component';
import { UpdateEvenementsArtisteComponent } from './update-evenements-artiste/update-evenements-artiste.component';
import { ModifierEventComponent } from './modifier-event/modifier-event.component';
import { AffecterUtilisateurComponent } from './affecter-utilisateur/affecter-utilisateur.component';
import { ListeInscriptionsParticipantComponent } from './liste-inscriptions-participant/liste-inscriptions-participant.component';
import { AjouterParticipantParticpantComponent } from './ajouter-participant-particpant/ajouter-participant-particpant.component';
import { AdminstrateurComponentComponent } from './adminstrateur-component/adminstrateur-component.component';
import { ParticipantComponentComponent } from './participant-component/participant-component.component';



@NgModule({
  declarations: [
    AppComponent,
    ListeDesEvenementsComponent,
    LoginComponent,
    AjoutEventComponent,
    ListeUtilisateurComponent,
    AddNewUserComponent,
    ModifierUtilisateurComponent,
    EditEventComponent,
    ListeEvenementsCommentairesComponent,
    AjouterCommentaireComponent,
    ListeCommentaireComponent,
    ModifierCommentaireComponent,
    ListeevenetsAdminstrateurComponent,
    ListeEvenementsArtisteComponent,
    AjoutEvenementsArtisteComponent,
    UpdateEvenementsArtisteComponent,
    ModifierEventComponent,
    AffecterUtilisateurComponent,
    ListeInscriptionsParticipantComponent,
    AjouterParticipantParticpantComponent,
    AdminstrateurComponentComponent,
    ParticipantComponentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule, // Ajoutez ceci
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
