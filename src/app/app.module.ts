import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './Etudiant/Components/list-event/event/event.component';
import { ListEventComponent } from './Etudiant/Components/list-event/list-event.component';
import { AboutUsComponent } from './Etudiant/Components/about-us/about-us.component';
import { SelectedEventComponent } from './Etudiant/Components/list-event/event/selected-event/selected-event.component';
import { PricePipe } from './pipes/price.pipe';
import { NavMenuComponent } from './Etudiant/Components/nav-menu/nav-menu.component';
import { AcceuilComponent } from './Etudiant/Components/acceuil/acceuil.component';
import { IdPipe } from './pipes/id.pipe';
import { NavBarBOComponent } from './Admin/Components/nav-bar-bo/nav-bar-bo.component';
import { MainBoComponent } from './Admin/main-bo/main-bo.component';
import { MainFoComponent } from './Etudiant/main-fo/main-fo.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { Error404Component } from './error404/error404.component';
import { SettingsComponent } from './Admin/Components/settings/settings.component';
import { ListAdminComponent } from './Admin/Components/list-admin/list-admin.component';
import { AdminEventComponent } from './Admin/Components/list-admin/admin-event/admin-event.component';
import { AdminEventEditComponent } from './Admin/Components/list-admin/admin-event-edit/admin-event-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Admin/login/login.component';
import { AddEventComponent } from './Admin/Components/list-admin/add-event/add-event.component';


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
    AcceuilComponent,
    IdPipe,
    NavBarBOComponent,
    MainFoComponent,
    MainBoComponent,
    MainMenuComponent,
    ListAdminComponent,
    SettingsComponent,
    AdminEventComponent,
    AdminEventEditComponent,
    LoginComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
