import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing} from './app.routing';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavbarComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders], //Proveedor de servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
