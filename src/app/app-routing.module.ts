import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventComponent } from './Etudiant/Components/list-event/list-event.component';
import { AboutUsComponent } from './Etudiant/Components/about-us/about-us.component';
import { Error404Component } from './Etudiant/Components/error404/error404.component';
import { SelectedEventComponent } from './Etudiant/Components/selected-event/selected-event.component';
import { AcceuilComponent } from './Etudiant/Components/acceuil/acceuil.component';

const routes: Routes = [
  {path:'acceuil', title:'Acceuil', component:AcceuilComponent},
  {path:'listePieces', title:'Liste des Pièces', component:ListEventComponent},
  {path:'listePieces/:id', title:'Détails', component:SelectedEventComponent},
  {path:'aboutUs', title:'About Us', component:AboutUsComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'**', title:'ERROR 404', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
