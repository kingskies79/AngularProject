import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Veicolo } from '../veicolo';
@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class VeicoloComponent  implements OnInit {

  // bind output with an event that send an object type veicle at the component ceicle-list
  @Output() rimuoviMezzo = new EventEmitter <Veicolo>();

  // bind input data to receive data from the component veicle-list
  @Input() mezzi: Veicolo;
  constructor() { }

  ngOnInit() {
  }
  rimuoviVeicolo(id) {
    console.log('rimuoviVeicolo' + id);
    this.rimuoviMezzo.emit(id);
  }

}
