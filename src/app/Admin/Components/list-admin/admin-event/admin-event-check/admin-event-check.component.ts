import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-admin-event-check',
  templateUrl: './admin-event-check.component.html',
  styleUrls: ['./admin-event-check.component.css']
})
export class AdminEventCheckComponent {
  Play!:Event|undefined;
  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.Play=this.servicePiece.getPlaysById(Id);
  }
}
