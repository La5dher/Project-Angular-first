import { Commentaire } from "./commentaire";

export class Evenement {
    constructor(public id:number, public intitule:string, public photo:string, public nbrPersonne:number, public Obligatoire:boolean, public date:Date, public commentaires:Commentaire[], public lieu:string){}
}