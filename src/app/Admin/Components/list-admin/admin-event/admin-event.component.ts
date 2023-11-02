import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from 'src/app/Classes/event';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent {
  @Output() deleteRequest: EventEmitter<any> = new EventEmitter();
  @Input()Play!:Event;
  onDelete(value:number){
    this.deleteRequest.emit(value);
  }
}
