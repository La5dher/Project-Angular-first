import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Classes/event';
import { PiecesService } from 'src/app/Services/pieces.service';

@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html',
  styleUrls: ['./admin-event-edit.component.css']
})
export class AdminEventEditComponent {
  Play!:Event|undefined;
  playEditForm!:FormGroup;
  constructor(private servicePiece:PiecesService, private serviceActivatedRoute:ActivatedRoute, private formBuilder:FormBuilder){}
  ngOnInit(){
    let Id=this.serviceActivatedRoute.snapshot.params['id'];
    this.servicePiece.getPlaysById(Id).subscribe( 
      data => {
        this.Play=data;
        this.playEditForm = this.formBuilder.nonNullable.group(
          {
            intitule:this.Play.intitule,
            date:new Date(this.Play.date).toDateString(),
            lieu:this.Play.lieu
          }); 
      }
    );
    
  }

  
  onSubmit(){
    if (this.Play!=undefined){
      this.Play.intitule=this.playEditForm.value['intitule'];
      this.Play.date=new Date(this.playEditForm.value['date']);
      this.Play.lieu=this.playEditForm.value['lieu'];
      console.log(this.Play);
      this.servicePiece.updatePlaysTableById(this.Play).subscribe( 
        data => {
          this.Play=data;
          
        }
      );
      alert("Changes Saved Successfully!");
    }
    
  }




  onReset(){
    this.playEditForm.reset({
      intitule:this.Play?.intitule,
      date:this.Play?.date.toDateString(),
      lieu:this.Play?.lieu
    });
  }


  onDelete(index:number){
    this.servicePiece.removeCommentByIndex(index,this.Play).subscribe( 
      data => {
      }
    );;
  }
}
