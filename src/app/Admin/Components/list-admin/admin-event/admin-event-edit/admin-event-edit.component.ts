import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html',
  styleUrls: ['./admin-event-edit.component.css']
})
export class AdminEventEditComponent {
  Play!:Event|undefined;
  DateString:string|undefined;
  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    //this.Play=this.servicePiece.getPlaysById(Id);
    this.DateString=this.Play?.date.toDateString();
  }
}
