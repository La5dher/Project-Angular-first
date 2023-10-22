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
  Play!:Event|undefined;
  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.Play=this.servicePiece.getPlaysTableById(Id);
  }
}
