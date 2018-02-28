export class Book {
  public id:number;
  public nombre:string;
  public autor:string;
  public editorial:string;
  public ano:number;
  public estilo:string;


  constructor(id:number, nombre:string, autor:string, editorial:string, ano:number, estilo:string){
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.ano = ano;
    this.estilo = estilo;
  }

}
