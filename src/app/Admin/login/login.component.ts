import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private authService:AuthAdminService){ }

  onLogin(lg:string, mdp:string){
    if(this.authService.login(lg, mdp))
      this.router.navigate(['/admin']);
    else
      alert("Login ou mot de passe incorrect");
  }
    
    
}
