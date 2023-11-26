import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  Play!:Evenement|undefined;
  playAddForm!:FormGroup;
  constructor(private servicePiece:PiecesService, private formBuilder:FormBuilder){}


  ngOnInit(){
    this.playAddForm = this.formBuilder.nonNullable.group(
      {
        id:["",Validators.required],
        intitule:["",Validators.required],
        photo:["",Validators.required],
        nbrPersonne:0,
        Obligatoire:["false",Validators.required],
        date:["",Validators.required],
        commentaires:[],
        lieu:["",Validators.required],
      });
  }


  public get Id(){
    return this.playAddForm.get("id");
  }
  public get intitule(){
    return this.playAddForm.get("intitule");
  }
  public get date(){
    return this.playAddForm.get("date");
  }
  public get lieu(){
    return this.playAddForm.get("lieu");
  }

  onSubmit(){
    if(this.playAddForm.value.Obligatoire=="true")
      this.playAddForm.value.Obligatoire=true;
    else if(this.playAddForm.value.Obligatoire=="false"){
      this.playAddForm.value.Obligatoire=false;
    }
    this.playAddForm.value.commentaires=[];
    console.log(this.playAddForm.value);
    this.servicePiece.addPlaysTableById(this.playAddForm.value as Evenement).subscribe( 
      data => {
        console.log(data);
          
      }
    );
    alert("Event Added Successfully!");

  }

}
