import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private authService:AuthAdminService, private router:Router){}
  onDisconnect(){
    this.authService.logout();
    alert("Disconnected Successfully!");
    this.router.navigate(['/Mainmenu']);
  }

  onChangeMdp(value:string,oldpass:string){
    if (oldpass!=this.authService.getPass())
      alert("Verifiez l'ancien mot de passe");
    else{
      if(value!=""){
        this.authService.logout();
        this.authService.passChange(value);
        this.router.navigate(['/admin']);
      }
    }
  }
}
