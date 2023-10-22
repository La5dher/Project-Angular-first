import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './Etudiant/Components/event/event.component';
import { ListEventComponent } from './Etudiant/Components/list-event/list-event.component';
import { AboutUsComponent } from './Etudiant/Components/about-us/about-us.component';
import { Error404Component } from './Etudiant/Components/error404/error404.component';
import { SelectedEventComponent } from './Etudiant/Components/selected-event/selected-event.component';
import { PricePipe } from './pipes/price.pipe';
import { NavMenuComponent } from './Etudiant/Components/nav-menu/nav-menu.component';
import { AcceuilComponent } from './Etudiant/Components/acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ListEventComponent,
    AboutUsComponent,
    Error404Component,
    SelectedEventComponent,
    PricePipe,
    NavMenuComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
