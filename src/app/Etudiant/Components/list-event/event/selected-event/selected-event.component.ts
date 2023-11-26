import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.component.html',
  styleUrls: ['./selected-event.component.css']
})
export class SelectedEventComponent implements OnInit{
  nbPersonnes:number=0;
  Etat:string="Joindre";
  join:boolean=false;
  Play!:Evenement|undefined;


  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.servicePiece.getPlaysById(Id).subscribe( 
      data =>{
      this.Play=data
      if (this.Play!==undefined){
        this.nbPersonnes=this.Play.nbrPersonne;
      }}
    );
    
  }
  
  onJoindre(){
    if (this.join){
      this.Etat="Joindre";
      this.join=false;
    }
    else{
      this.join=true;
      this.Etat="Annuler";
    }
  }
  OnAnnuler(){
      
  }
  onAjoute(nom:string, message:string){
    if(message.trim()!=""){
      let Id=this.serviceActivatedRoute.snapshot.params['id'];
      this.servicePiece.addCommentById(Id, this.Play, nom, message).subscribe( );
    }
  }
}