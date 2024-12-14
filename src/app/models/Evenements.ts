export interface Evenement {
    idevenement: number;
    nom_Evenement: string;
    date_evenements: Date;
    lieu_evenements: string;
    image: string;
    utilisateur: {
      idutilisateur: number;
    };
  }