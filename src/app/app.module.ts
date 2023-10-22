import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './Etudiant/event/event.component';
import { ListEventComponent } from './Etudiant/list-event/list-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ListEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
