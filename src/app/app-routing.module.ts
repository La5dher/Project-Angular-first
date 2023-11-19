import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventComponent } from './Etudiant/Components/list-event/list-event.component';
import { AboutUsComponent } from './Etudiant/Components/about-us/about-us.component';
import { SelectedEventComponent } from './Etudiant/Components/list-event/event/selected-event/selected-event.component';
import { AcceuilComponent } from './Etudiant/Components/acceuil/acceuil.component';
import { MainFoComponent } from './Etudiant/main-fo/main-fo.component';
import { MainBoComponent } from './Admin/main-bo/main-bo.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { Error404Component } from './error404/error404.component';
import { SettingsComponent } from './Admin/Components/settings/settings.component';
import { ListAdminComponent } from './Admin/Components/list-admin/list-admin.component';
import { AdminEventCheckComponent } from './Admin/Components/list-admin/admin-event/admin-event-check/admin-event-check.component';
import { AdminEventEditComponent } from './Admin/Components/list-admin/admin-event/admin-event-edit/admin-event-edit.component';
import { adminGuardGuard } from './Guards/admin-guard.guard';
import { LoginComponent } from './Admin/login/login.component';

const routes: Routes = [
  {path:'Mainmenu', title:'Your Drama', component:MainMenuComponent},
  {path:'user', title:'User Interface', component:MainFoComponent, children:[
    {path:'acceuil', title:'Acceuil', component:AcceuilComponent},
    {path:'listePieces', title:'Liste des Pièces', component:ListEventComponent},
    {path:'listePieces/:id', title:'Détails', component:SelectedEventComponent},
    {path:'aboutUs', title:'About Us', component:AboutUsComponent},
    {path:'', redirectTo:'acceuil', pathMatch:'full'},
    
  ]},
  { path:'login', title:'Login', component:LoginComponent},
  {path:'admin', canActivate:[adminGuardGuard], title:'Admin Interface', component:MainBoComponent, children:[
    {path:'gestion', title:'Gérer la liste des Pièces', component:ListAdminComponent},
    {path:'settings', title:'Paramètres', component:SettingsComponent},
    {path:'check/:id', title:'Détails', component:AdminEventCheckComponent},
    {path:'edit/:id', title:'Editer', component:AdminEventEditComponent},
    {path:'', redirectTo:'gestion', pathMatch:'full'},
  ]},
  {path:'', redirectTo:'Mainmenu', pathMatch:'full'},
  {path:'**', title:'ERROR 404', component:Error404Component}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
