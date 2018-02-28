import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public libros: Array<Book>;
  public texto;

  constructor() {
    this.texto='Escribe';

    this.libros =  [ new Book(1,
                    'La vida',
                    'Eduardo Molina',
                    'SM',
                    2015,
                    'Novela'),
                 new Book(2,
                      'La tierra',
                      'Paco Cano',
                      'SM',
                      2014,
                      'Novela')
                ];
  }


  //Tododo lo que haya en este metedo se ejecuta primero
  ngOnInit() {


  }


}
