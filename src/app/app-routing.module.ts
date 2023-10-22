import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventComponent } from './Etudiant/Components/list-event/list-event.component';
import { AboutUsComponent } from './Etudiant/Components/about-us/about-us.component';
import { Error404Component } from './Etudiant/Components/error404/error404.component';
import { SelectedEventComponent } from './Etudiant/Components/selected-event/selected-event.component';
import { AcceuilComponent } from './Etudiant/Components/acceuil/acceuil.component';
import { MainFoComponent } from './Etudiant/main-fo/main-fo.component';
import { MainBoComponent } from './Admin/main-bo/main-bo.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {path:'Mainmenu', title:'Your Drama', component:MainMenuComponent},
  {path:'user', title:'User Interface', component:MainFoComponent, children:[
    {path:'acceuil', title:'Acceuil', component:AcceuilComponent},
    {path:'listePieces', title:'Liste des Pièces', component:ListEventComponent},
    {path:'listePieces/:id', title:'Détails', component:SelectedEventComponent},
    {path:'aboutUs', title:'About Us', component:AboutUsComponent},
    {path:'', redirectTo:'acceuil', pathMatch:'full'},
    
  ]},
  {path:'admin', title:'Admin Interface', component:MainBoComponent, children:[]},
  {path:'', redirectTo:'Mainmenu', pathMatch:'full'},
  {path:'**', title:'ERROR 404', component:Error404Component}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
