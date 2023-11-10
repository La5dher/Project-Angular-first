import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit{
  tabPlays:Event[]=[];
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
        this.servicePiece.getPlaysTableByName(text).subscribe( 
          data => this.tabPlays=data
        );
      }
    }
    else{
      this.servicePiece.getPlaysTable().subscribe( 
        data => this.tabPlays=data
      );
    }
  }

  onCancel(){
    this.servicePiece.getPlaysTable().subscribe( 
      data => this.tabPlays=data
    );
    this.val="";
  }


}