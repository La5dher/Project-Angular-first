import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit{
  tabPlays:Event[]=[];
  constructor(private servicePiece:PiecesService){}
  ngOnInit(){
    this.tabPlays=this.servicePiece.getPlaysTable();
  }
  onSearch(text:string){
    if(text==""){ }
    else if (!isNaN(Number(text))){
      this.tabPlays=this.servicePiece.getPlaysTableById(text);
    }
    else{
      alert("Tu peux chercher seulement avec l'ID");
    }
  }

  refresh(deleteRequest:number){
    this.servicePiece.deletePlaysTableById(deleteRequest);
    this.tabPlays=this.servicePiece.getPlaysTable();
    alert("Change saved successfully!");
  }
}
