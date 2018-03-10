import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; //Libreria para mapear las respuestas http
import {Observable} from 'rxjs/Observable'; // Esto nos permite usar rxjs

//Decorador injectable
@Injectable()
export class PeticionesService{

  public url:string;

  constructor(private _http:Http){ //Para poder hacer peticiones http
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba(){
    return "Servicio Peticiones";
  }

  getArticulos(){
    return this._http.get(this.url) //Para poder recoger la información función callback (PETICION AJAX HACIA INTERNET)
                     .map(resultado => resultado.json()); //Convertimos la respuesta a JSON
  }

}
