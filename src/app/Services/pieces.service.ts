import { Injectable } from '@angular/core';
import { Event } from '../Classes/event';
import { Commentaire } from '../Classes/commentaire';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  private tabPlays:Event[]=[
    new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),new Event(21, "Romeo and Juliet", "assets/RomeoAndJuliet.jpg", 25, true, new Date("2024/6/25"), 
    [], "Municipal Theatre"),
    new Event(503, "Hamlet", "assets/Hamlet.jpg", 45, false, new Date("2024/6/26"), 
    [new Commentaire("Ghaith", new Date("2023-10-22"), "Bonjour")], "Municipal Theatre")
  ];

  constructor() { }

  public getPlaysTable(){
    return this.tabPlays;
  }
  public getPlaysById(id:number){
    return this.tabPlays.find(elt=>elt.id==id);
  }
  public addCommentById(id:number, nom:string, message:string){
    this.getPlaysById(id)?.commentaires.push(new Commentaire(nom, new Date(), message));
  }

  public getPlaysTableByName(text:string){
    return this.tabPlays.filter(elt=>elt.intitule.toUpperCase().includes(text.toUpperCase()));
  }

  public getPlaysTableById(text:string){
    return this.tabPlays.filter(elt=>elt.id==Number(text));
  }

  public deletePlaysTableById(id:number){
    this.tabPlays=this.tabPlays.filter(elt=> elt.id != Number(id));
  }
}
