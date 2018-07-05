import { Component, OnInit } from '@angular/core';
import {Veicolo} from './veicolo';


export class Moto extends Veicolo implements OnInit  {
  tempi: string;

  constructor(tempi: string, id: number) {
    super('Moto', id);
    this.tempi = tempi;
    }

  ngOnInit() {
  }

}

