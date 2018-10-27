import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LibroRoutingModule} from './libro-routing.module';
import {LibroComponent} from './libro.component';

@NgModule({
  imports: [
    CommonModule,
    LibroRoutingModule
  ],
  declarations: [LibroComponent]
})
export class LibroModule {
}
