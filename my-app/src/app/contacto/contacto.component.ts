import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [PeticionesService] //Importante
})
export class ContactoComponent implements OnInit {

    public contacto: Contacto;
    public articulos;

    constructor(
      private _peticionesService:PeticionesService
    ) {
      this.contacto = new Contacto("","","","");
    }

    ngOnInit() {
      //Llamada al servicio REST
      this._peticionesService.getArticulos().subscribe(
        result => {
          this.articulos = result; //Guardar el resultado de la peticion
          console.log(result);
        },
        error => {
          var errormessage = <any>error;
          console.log(errormessage);
        }
      );
  }

  enviar(){
    console.log(this.contacto);
  }

}
