import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html',
  styleUrls: ['./admin-event-edit.component.css']
})
export class AdminEventEditComponent {
  Play!:Evenement|undefined;
  playEditForm!:FormGroup;
  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute, private formBuilder:FormBuilder){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.servicePiece.getPlaysById(Id).subscribe( 
      data => {
        this.Play=data;
        this.playEditForm = this.formBuilder.nonNullable.group(
          {
            id:[this.Play.id,Validators.required],
            intitule:[this.Play.intitule,Validators.required],
            photo:[this.Play.photo,Validators.required],
            nbrPersonne:0,
            Obligatoire:["false",Validators.required],
            date:[this.Play.date,Validators.required],
            commentaires:new Array(),
            lieu:[this.Play.lieu,Validators.required],
          });
      }
    );
    
  }


  public get Id(){
    return this.playEditForm.get("id");
  }
  public get intitule(){
    return this.playEditForm.get("intitule");
  }
  public get date(){
    return this.playEditForm.get("date");
  }
  public get lieu(){
    return this.playEditForm.get("lieu");
  }
  
  onSubmit(){
      if(this.playEditForm.value.Obligatoire=="true")
        this.playEditForm.value.Obligatoire=true;
      else if(this.playEditForm.value.Obligatoire=="false"){
        this.playEditForm.value.Obligatoire=false;
      }
      this.playEditForm.value.commentaires=[];
      console.log(this.playEditForm.value);
      this.servicePiece.updatePlaysTableById(this.playEditForm.value as Evenement).subscribe( 
        data => {
          this.Play=data;
        }
      );
      alert("Changes Saved Successfully!");
    
    
  }




  onReset(){
    
  }


  onDelete(index:number){
    this.servicePiece.removeCommentByIndex(index,this.Play).subscribe( 
      data => {
      }
    );;
  }
}
