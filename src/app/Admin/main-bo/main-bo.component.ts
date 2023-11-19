import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';

@Component({
  selector: 'app-main-bo',
  templateUrl: './main-bo.component.html',
  styleUrls: ['./main-bo.component.css']
})
export class MainBoComponent {
  constructor(private authService:AuthAdminService, private router:Router){}
  onDisconnect(){
    this.authService.logout();
    this.router.navigate(['/Mainmenu']);
  }
}
