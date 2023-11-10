import { Injectable } from '@angular/core';
import { Event } from '../Classes/event';
import { Commentaire } from '../Classes/commentaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/pieces";

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  private tabPlays:Event[]=[];

  constructor(private http: HttpClient) { }

  public getPlaysTable():Observable<Event[]>{
    return this.http.get<Event[]>(URL);
  }

  public getPlaysById(id:number):Observable<Event>{
    return this.http.get<Event>(URL+"/"+id);
  }
  public addCommentById(id:number, play:Event|undefined, nom:string, message:string){
    
    if (nom.trim()==""){
      nom="Anonymous";
    }
    let comment=new Commentaire(nom, new Date(), message);
    play?.commentaires.push(comment);
    return this.http.put<Event[]>(URL+"/"+id, play);
  }

  public getPlaysTableByName(text:string){
    return this.http.get<Event[]>(URL+"?intitule="+text);
  }

  public getPlaysTableById(id:string){
    return this.http.get<Event[]>(URL+"?id="+id);
  }

  public deletePlaysTableById(id:number){
    return this.http.delete<Event>(URL+"/"+id);
  }
}
