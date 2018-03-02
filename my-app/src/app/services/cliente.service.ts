import {Injectable} from '@angular/core';

//Decorador injectable
@Injectable()
export class ClienteService {
    public coleccion_clientes = ['pedro', 'javier', 'Sandra'];

    prueba(){
      return 'Cliente Service';
    }

    addCliente(cliente){
      this.coleccion_clientes.push(cliente);
    }

    getClientes(){
      return this.coleccion_clientes;
    }

    delCliente(index){
      this.coleccion_clientes.splice(index,1); //Indece de donde borramos y el numero de elementos a borrar del array
    }
}
