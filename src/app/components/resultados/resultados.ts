import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  imports: [],
  templateUrl: './resultados.html',
})
export class Resultados {
  beforeData = {
    title: 'Operando desde el Desgaste',
    subtitle: 'Sistema nervioso desregulado',
    indicators: [
      { icon: 'fa-solid fa-brain', label: 'Claridad Mental', value: 'Comprometida' },
      { icon: 'fa-solid fa-bolt', label: 'Energía Funcional', value: 'Fluctuante' },
      { icon: 'fa-solid fa-bullseye', label: 'Toma de Decisiones', value: 'Desde la fatiga' },
      { icon: 'fa-regular fa-clock', label: 'Recuperación', value: 'Insuficiente' },
    ],
    outcomes: [
      'Te peleás con vos mismo/a',
      'Sin energía para sostener proyectos',
      'Frustración y culpa constante',
    ],
  };

  afterData = {
    title: 'Bienestar Inteligente',
    subtitle: 'Sistema optimizado y sostenible',
    indicators: [
      { icon: 'fa-solid fa-brain', label: 'Claridad Mental', value: 'Recuperada' },
      { icon: 'fa-solid fa-bolt', label: 'Energía Funcional', value: 'Sostenida' },
      { icon: 'fa-solid fa-bullseye', label: 'Toma de Decisiones', value: 'Estratégica' },
      { icon: 'fa-regular fa-clock', label: 'Recuperación', value: 'Rápida' },
    ],
    outcomes: [
      'Sostenés hábitos reales',
      'Más energía disponible',
      'Coherencia en tu vida',
    ],
  };
}
