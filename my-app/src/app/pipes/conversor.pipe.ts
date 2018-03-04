import {Pipe,PipeTransform} from "@angular/core";

@Pipe({ name: 'conversor' }) //Nombre de la pipe nuestra
export class ConversorPipe implements PipeTransform{
      //Método obligatorio en todas las pipes
      transform(n1:number, n2:number){
          let result = "La suma de "+n1+" y "+n2+" es: "+(n1+n2);
          return result;
      }
}
