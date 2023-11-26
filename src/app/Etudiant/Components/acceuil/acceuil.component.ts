import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/Services/meteo.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{


  resultat?:number;
  message?:string="";
  constructor(private serviceMeteo:MeteoService){}

  ngOnInit(): void {
    this.serviceMeteo.getTemperature().subscribe( 
      data => {
        let tab=Object.values(data);
        this.resultat=tab[8].temperature_2m[12];
      }
    );
    if (this.resultat==undefined)
      this.message="Erreur lors retrouve de Temperature";
  }
  
}
