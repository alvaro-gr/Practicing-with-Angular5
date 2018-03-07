import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { BookComponent } from './book/book.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ContactoComponent } from './contacto/contacto.component';

//Rutas
const appRoutes: Routes = [
  {path: '', component: BookComponent}, //Home
  {path: 'book', component: BookComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'reserva/:page', component: ReservaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: BookComponent} //Cuando ocurre un error
];

//Variables necearias para que funcione el sistema de rutas
export const appRoutingProviders: any[] = []; //Necesario para Angular

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //Carga del array de rutas para Angular
