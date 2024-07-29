
export class contact {

    id?: number;
    nom?: string;
    prenom?:string;
    email?: string;
    telephone?: number;
    etat?:boolean;
    description?:string;

  
    constructor(   id?: number,
        nom?: string,
        prenom?:string,
        email?: string,
        telephone?: number,
        etat?:boolean,
        description?:string) {
      this.id = id;
      this.nom = nom;
      this.email = email;
      this.telephone = telephone;
      this.etat=etat;
      this.description=description;
    }
  }