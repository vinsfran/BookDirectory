import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AutorRoutingModule} from './autor-routing.module';
import {AutorComponent} from './autor.component';

@NgModule({
  imports: [
    CommonModule,
    AutorRoutingModule
  ],
  declarations: [AutorComponent]
})
export class AutorModule {
}
