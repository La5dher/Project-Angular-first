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
  constructor(private servicePiece:PiecesService){}
  ngOnInit(){
    this.tabPlays=this.servicePiece.getPlaysTable();
  }
}
