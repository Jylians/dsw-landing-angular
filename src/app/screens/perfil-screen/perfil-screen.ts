import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Julián Sánchez Osorio',
    email: 'julian.sanchezos@alumno.buap.mx',
    telefono: '222 123 4567',
    direccion: 'San Baltazar Atlimeyaya, Tianguismanalco, Puebla',
    nacimiento: '15/05/2006'
  };
}
