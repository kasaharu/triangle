import { NgModule } from '@angular/core';
import { GadgetComponent } from './gadget.component';
import { ButtonComponent } from './atoms/button/button.component';

@NgModule({
  imports: [
  ],
  declarations: [GadgetComponent, ButtonComponent],
  exports: [GadgetComponent, ButtonComponent],
})
export class GadgetModule { }
