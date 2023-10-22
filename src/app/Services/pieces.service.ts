import { Injectable } from '@angular/core';
import { Event } from '../Classes/event';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  private tabPlays:Event[]=[
    new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), [], "Municipal Theatre"),
    new Event(53, "Hamlet", "assets/Hamlet.jpg", 45, false, new Date("2024/6/26"), [], "Municipal Theatre")
  ];

  constructor() { }

  public getPlaysTable(){
    return this.tabPlays;
  }
  public getPlaysTableById(id:number){
    return this.tabPlays.find(elt=>elt.id==id);
  }
}
