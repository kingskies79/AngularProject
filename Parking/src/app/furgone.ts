import {OnInit } from '@angular/core';
import {Veicolo} from './veicolo';


export class Furgone extends Veicolo implements OnInit {
  capacita: string;
  constructor(capacita: string, id: number) {
    super('Furgone', id);
    this.capacita = capacita;
  }

  ngOnInit() {
  }

}
