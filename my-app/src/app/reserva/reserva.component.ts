import { Component, OnInit } from '@angular/core';

//Para poder trabajar con las Rutas
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    //Para recojer todos los parametros (Funcion "tipo flecha lo mismo que la tipica funcion callback")
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
  }

  redirigir(){
    //Redirigir rutas
    this._router.navigate(['/reserva','parametro']);
  }

}
