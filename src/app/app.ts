import { Component, signal } from '@angular/core';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
import { Hero } from './components/hero/hero';
import { PuntoPartida } from './components/punto-partida/punto-partida';
import { Metodo } from './components/metodo/metodo';
import { Resultados } from './components/resultados/resultados';
import { Trayectoria } from './components/trayectoria/trayectoria';
import { PruebaSocial } from './components/prueba-social/prueba-social';
import { SistemasVida } from './components/sistemas-vida/sistemas-vida';
import { ContactoCta } from './components/contacto-cta/contacto-cta';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Footer,
    Hero,
    PuntoPartida,
    Metodo,
    Resultados,
    Trayectoria,
    PruebaSocial,
    SistemasVida,
    ContactoCta
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('marca-personal');
}
