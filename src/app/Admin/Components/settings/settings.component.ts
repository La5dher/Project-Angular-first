import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  constructor(private authService:AuthAdminService, private router:Router,
     private formBuilder:FormBuilder){}


  playPasswordChangeForm!:FormGroup;
  ngOnInit(){
    this.playPasswordChangeForm = this.formBuilder.nonNullable.group(
      {
        oldPassword:["",Validators.required],
        password:["",[Validators.minLength(8), Validators.required]]
      }); 
  }

  public get Password(){
    return this.playPasswordChangeForm.get('password');
  }

  public get oldPassword(){
    return this.playPasswordChangeForm.get('oldPassword');
  }



  onDisconnect(){
    this.authService.logout();
    alert("Disconnected Successfully!");
    this.router.navigate(['/Mainmenu']);
  }


  onChangeMdp(value:string,oldpass:string){
    console.log(this.playPasswordChangeForm.value);
    if (oldpass!=this.authService.getPass())
      alert("Verifiez l'ancien mot de passe");
    else{
      this.authService.passChange(value);
      this.router.navigate(['/admin']);
      alert("Mot de passe change avec succes");
    }
    
  }
}
