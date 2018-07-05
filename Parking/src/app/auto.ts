import { Component, OnInit, Input } from '@angular/core';
import {Veicolo} from './veicolo';

export class Auto extends Veicolo implements OnInit {
    porte: string;
    alimentazione: string;
    @Input() auto: Veicolo;
    constructor(porte: string, alimentazione: string, id: number) {
      super('Auto', id);
      this.porte = porte;
      this.alimentazione = alimentazione;
   }
   ngOnInit() {
    }
  }
