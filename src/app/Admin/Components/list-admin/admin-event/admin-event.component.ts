import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evenement } from 'src/app/Classes/event';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent {
  @Output() deleteRequest: EventEmitter<any> = new EventEmitter();
  @Input()Play!:Evenement;
  onDelete(value:number){
    this.deleteRequest.emit(value);
  }
}
