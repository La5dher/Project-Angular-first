import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit{
  tabPlays:Evenement[]=[];
  val:string ="";

  constructor(private servicePiece:PiecesService){}
  ngOnInit(){
    this.servicePiece.getPlaysTable().subscribe( 
      data => this.tabPlays=data
    );
  }

  onSearch(text:string){
    
    if(text!=""){ 
      if (!isNaN(Number(text))){
        this.servicePiece.getPlaysTableById(text).subscribe( 
          data => this.tabPlays=data
        );
      }
      else{
        alert("Only search by ID is allowed");
      }
    }
    else{
      this.servicePiece.getPlaysTable().subscribe( 
        data => this.tabPlays=data
      );
    }
  }

  deleteRequestSend(deleteRequest:number){
    this.servicePiece.deletePlaysTableById(deleteRequest).subscribe( 
      data => this.tabPlays=this.tabPlays.filter(function(elt){return elt.id!=deleteRequest})
    );
    alert("Change saved successfully!");
  }

  onCancel(){
    this.servicePiece.getPlaysTable().subscribe( 
      data => this.tabPlays=data
    );
    this.val="";
  }
}
