import { Component } from '@angular/core';
import { Event } from 'src/app/Classes/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  tabPlays:Event[]=[
    new Event(1, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), [], "Municipal Theatre"),
    new Event(2, "Hamlet", "assets/Hamlet.jpg", 45, true, new Date("2024/6/26"), [], "Municipal Theatre")
  ];
}
