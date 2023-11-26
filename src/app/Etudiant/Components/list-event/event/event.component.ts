import { Component, Input } from '@angular/core';
import { Evenement } from 'src/app/Classes/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
 @Input()Play!:Evenement;
 }
