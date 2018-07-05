
export class Garage {
     capienza = 15;
     TipoVeicoloAmmesso = [];
     constructor (capacita: number, TipoVeicoloAmmesso) {
        this.capienza = capacita;
        this.TipoVeicoloAmmesso = TipoVeicoloAmmesso;
     }

     getCapienzaGarage () {

        return this.capienza;
     }
}
