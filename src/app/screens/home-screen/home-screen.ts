import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  imports: [],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss'
})
export class HomeScreen {
  tecnologias = [
    { nombre: 'Angular', icono: 'bi-braces', descripcion: 'Framework para construir aplicaciones SPA de alto rendimiento.' },
    { nombre: 'TypeScript', icono: 'bi-filetype-tsx', descripcion: 'Superconjunto tipado de JavaScript utilizado como lenguaje base.' },
    { nombre: 'Node.js y NPM', icono: 'bi-box-seam', descripcion: 'Entorno de ejecución y gestor de paquetes para la arquitectura web moderna.' }
  ];
}
