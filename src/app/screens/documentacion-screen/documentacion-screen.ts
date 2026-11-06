import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen {
  urlDocumentacion = 'https://angular.dev';
  diapositivas = [
    { titulo: 'Node.js', imagen: 'assets/img/carousel_1.jpeg' },
    { titulo: 'TypeScript', imagen: 'assets/img/carousel_2.jpeg' },
    { titulo: 'Angular', imagen: 'assets/img/carousel_3.jpeg' },
    { titulo: 'NPM', imagen: 'assets/img/buap-fcc.jpg' }
  ];
}
