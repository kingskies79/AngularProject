import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGarageComponent } from './form-garage/form-garage.component';

import { VeicoloListComponent } from './veicolo-list/veicolo-list.component';
import { VeicoloComponent } from './veicolo/veicolo.component';
import { CcAutoHoverDirective } from './cc-auto-hover.directive';
import { CcMotoHoverDirective } from './cc-moto-hover.directive';
import { CcFurgoneHoverDirective } from './cc-furgone-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormGarageComponent,
    VeicoloListComponent,
    VeicoloComponent,
    CcAutoHoverDirective,
    CcMotoHoverDirective,
    CcFurgoneHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
