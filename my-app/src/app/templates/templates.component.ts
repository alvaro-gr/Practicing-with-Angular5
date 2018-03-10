import { Component } from '@angular/core';

@Component({
  selector: 'templates-root',
  templateUrl: './templates.component.html',
//  styleUrls: ['./app.component.css']
})

export class TemplatesComponent {
    public titulo;
    public administrador;

    constructor(){
      this.titulo = "Plantillas ngTemplate en Angular";
      this.administrador = true;
    }
}
