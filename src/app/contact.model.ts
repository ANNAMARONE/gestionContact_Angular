export class Contact {
    nom: string;
    prenom: string;
    email: string;
    etat: string;
    telephone: string;
    description: string;
  
    constructor(
      nom: string = '',
      prenom: string = '',
      email: string = '',
      etat: string = '',
      telephone: string = '',
      description: string = ''
    ) {
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.etat = etat;
      this.telephone = telephone;
      this.description = description;
    }
  }
  