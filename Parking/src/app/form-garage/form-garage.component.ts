import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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


  TipoVeicoloAmmesso = [{ name: 'Auto' }, { name: 'Moto' }, { name: 'Furgone' }];
  constructor() {
    this.id = -1;

  }

  ngOnInit() {
  }

  dropList(tipoVeicolo: string) {
    console.log(tipoVeicolo);
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
  inserisciMoto() {
    this.id += 1;
     console.log('inserisciMoto');
      this.InserisciMezzo.emit(new Moto(this.tipoMotore, this.id));



  }

  inserisciAuto(porte: string, alimentazione: string) {
    console.log('inserisciAuto');
    this.id += 1;
      this.InserisciMezzo.emit(new Auto(this.tipoPorte, this.tipoAlimentazione, this.id));


  }
  inserisciFurgone() {

    console.log('inserisciFurgone');
    this.id += 1;
      this.InserisciMezzo.emit(new Furgone(this.tipoVolume, this.id));


  }


  eliminaVeicolo() {

  }
}
