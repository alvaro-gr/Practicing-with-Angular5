import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing} from './app.routing';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TemplatesComponent } from './templates/templates.component';

import { ConversorPipe } from './pipes/conversor.pipe';
;


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavbarComponent,
    ReservaComponent,
    ConversorPipe,
    ContactoComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders], //Proveedor de servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
