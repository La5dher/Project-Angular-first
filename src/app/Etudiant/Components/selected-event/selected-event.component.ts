import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.component.html',
  styleUrls: ['./selected-event.component.css']
})
export class SelectedEventComponent implements OnInit{
  prixTotal:number=0.0;
  nbrTickets:number=1;
  nbrTicketsAchete:number=0;
  textBoutonAchat:string="Obtenir Ticket(s)";
  acheter:boolean=false;
  Play!:Event|undefined;
  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.Play=this.servicePiece.getPlaysTableById(Id);
    if (this.Play!==undefined){
      this.prixTotal=this.Play.prixTicket;
    }
  }
  onUpdatePrice(val:string){
    if (this.Play!==undefined){
      this.nbrTickets=Number(val);
      this.prixTotal=this.Play.prixTicket*this.nbrTickets;
    }
  }
  onAcheter(){
    if((this.nbrTicketsAchete+this.nbrTicketsAchete)<=10){
      alert('Succes');
      this.textBoutonAchat='Obtenir plus de Tickets';
      this.acheter=true;
      this.nbrTicketsAchete+=this.nbrTickets;
    }
    else
      alert('Limite de nombre Tickets dépassé');
  }
  OnAnnuler(){
      alert('Succes');
      this.textBoutonAchat='Obtenir Ticket(s)';
      this.acheter=false;
      this.nbrTicketsAchete=0;
  }
  onAjoute(nom:string, message:string){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.servicePiece.addCommentById(Id, nom, message);
  }
}