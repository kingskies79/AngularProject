import { Component, OnInit } from '@angular/core';
import { Garage } from '../garage';
import { Veicolo } from '../veicolo';


@Component({
  selector: 'app-veicolo-list',
  templateUrl: './veicolo-list.component.html',
  styleUrls: ['./veicolo-list.component.css']
})
export class VeicoloListComponent implements OnInit {
  // create a parking with 15 max veicle, for only Car, Motorbike and Truck
  newGarage: Garage = new Garage(15, ['Auto', 'Moto', 'Furgone}']);
  // create an array of carports with type veicle
  carport: Veicolo[] = [];
  constructor() { }

  ngOnInit() {
  }

  addMezzo(mezzo) {
    // Show log about veicle into the parking
    console.log('mezzo add' + mezzo);
    // verify places avaiable
    if (this.disponibilita()) {
      // add veicle into parking
      this.carport.unshift(mezzo);
      // show the veicles present into carports
      console.log(this.carport);
    } else {
      // the carports are unavaiables
      alert('Il garage è pieno');
    }
  }
  // the veicle go out the parking
  removeMezzo(id) {
    const index = this.carport.findIndex(x => x.id = id);
    this.carport.splice(index, 1);
  }
  // verify the status of the parking
  disponibilita(): boolean {
    if (this.carport.length < this.newGarage.capienza) {
      return true;

    } else {
      return false;
    }
  }
}
