import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Garage } from '../garage';
import { Veicolo } from '../veicolo';
import { Moto } from '../moto';
import { Auto } from '../auto';
import { Furgone} from '../furgone';
@Component({
  selector: 'app-form-garage',
  templateUrl: './form-garage.component.html',
  styleUrls: ['./form-garage.component.css']
})
export class FormGarageComponent  implements OnInit {

  // bind output with an event that send an object type veicle at the component veicle-list
  @Output() InserisciMezzo = new EventEmitter <Veicolo>();
  selectedValue = null;
  tipoVeicolo: string;
  tipoMotore: string;
  tipoVolume: string;
  tipoPorte: string;
  tipoAlimentazione: string;
  id: number;
  isActiveAuto = false;
  isActiveMoto = false;
  isActiveFurgone = false;

  // type veicle allowed
  TipoVeicoloAmmesso = [{ name: 'Auto' }, { name: 'Moto' }, { name: 'Furgone' }];
  constructor() {
    this.id = -1;

  }

  ngOnInit() {
  }
   // check the type of veicle enter into the parking
  dropList(tipoVeicolo: string) {

    switch (this.tipoVeicolo) {

      case 'Auto': {
        this.isActiveAuto = true;
        this.isActiveMoto = false;
        this.isActiveFurgone = false;
        break;
      }
      case 'Moto': {
        this.isActiveMoto = true;
        this.isActiveAuto = false;
        this.isActiveFurgone = false;
        break;
      }
      case 'Furgone': {
        this.isActiveFurgone = true;
        this.isActiveAuto = false;
        this.isActiveMoto = false;
        break;
      }
    }
  }
  // add motorbike into the parking
  inserisciMoto() {
    this.id += 1;
    this.InserisciMezzo.emit(new Moto(this.tipoMotore, this.id));
  }
  // add car into the parking
  inserisciAuto(porte: string, alimentazione: string) {
    this.id += 1;
    this.InserisciMezzo.emit(new Auto(this.tipoPorte, this.tipoAlimentazione, this.id));
  }
  // add truck into the parking
  inserisciFurgone() {
    this.id += 1;
    this.InserisciMezzo.emit(new Furgone(this.tipoVolume, this.id));
  }

}
