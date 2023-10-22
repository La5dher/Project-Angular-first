import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(value:number): string {
    let valeurCh=value.toString();
    while (valeurCh.length<5){
      valeurCh="0"+valeurCh;
    }
    return "(#"+valeurCh+")";
  }
}
