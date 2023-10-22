import { Commentaire } from "./commentaire";

export class Event {
    constructor(public id:number, public intitule:string, public photo:string, public prixTicket:number, public isEnfantGratuit:boolean, public date:Date, public commentaires:Commentaire[], public lieu:string){}
}