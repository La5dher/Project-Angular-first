import { Injectable } from '@angular/core';
import { Evenement } from '../Classes/event';
import { Commentaire } from '../Classes/commentaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/pieces";

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  

  constructor(private http: HttpClient) { }

  public getPlaysTable():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(URL);
  }

  public getPlaysById(id:number):Observable<Evenement>{
    return this.http.get<Evenement>(URL+"/"+id);
  }
  public addCommentById(id:number, play:Evenement|undefined, nom:string, message:string){
    
    if (nom.trim()==""){
      nom="Anonymous";
    }
    let comment=new Commentaire(nom, new Date(), message);
    play?.commentaires.push(comment);
    return this.http.put<Evenement>(URL+"/"+id, play);
  }

  public removeCommentByIndex(index:number, play:Evenement|undefined){
    if(play){
      play.commentaires=play?.commentaires.filter(function(elt){return elt!=play?.commentaires[index]});
      console.log(play?.commentaires);
    }
    return this.http.put<Evenement[]>(URL+"/"+play?.id, play);
  }

  public getPlaysTableByName(text:string){
    return this.http.get<Evenement[]>(URL+"?intitule="+text);
  }

  public getPlaysTableById(id:string){
    return this.http.get<Evenement[]>(URL+"?id="+id);
  }

  public deletePlaysTableById(id:number){
    return this.http.delete<Evenement>(URL+"/"+id);
  }

  public updatePlaysTableById(play:Evenement){
    return this.http.put<Evenement>(URL+"/"+play.id,play);
  }

  public addPlaysTableById(play:Evenement){
    return this.http.post<Evenement>(URL,play);
  }


}
