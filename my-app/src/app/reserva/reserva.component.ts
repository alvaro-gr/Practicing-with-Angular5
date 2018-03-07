import { Component, OnInit } from '@angular/core';

//Para poder trabajar con las Rutas
import {Router, ActivatedRoute, Params} from '@angular/router';

//Importar un servicio
import {ClienteService} from '../services/cliente.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [ClienteService]
})
export class ReservaComponent implements OnInit {

  public parametro;
  public listado_clientes: Array<String>;
  public cliente: String;
  public fecha: Date;

  constructor(
      private _route :  ActivatedRoute,
      private _clienteService: ClienteService,
      private _router : Router
  ) {
      this.fecha = new Date(2018,2,3);
  }

  ngOnInit() {
    //Para recojer todos los parametros (Funcion "tipo flecha lo mismo que la tipica funcion callback")
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });

    this._clienteService.prueba();

    this.listado_clientes = this._clienteService.getClientes();
  }

  redirigir(){
    //Redirigir rutas
    this._router.navigate(['/reserva','parametro']);
  }

  sumarCliente(){
    this._clienteService.addCliente(this.cliente);
    this.cliente=null;
  }

  eliminarCliente(index:number){
    this._clienteService.delCliente(index);
  }

}
