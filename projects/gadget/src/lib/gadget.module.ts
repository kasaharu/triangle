import { NgModule } from '@angular/core';
import { GadgetComponent } from './gadget.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LinkComponent } from './atoms/link/link.component';

@NgModule({
  imports: [
  ],
  declarations: [GadgetComponent, ButtonComponent, LinkComponent],
  exports: [GadgetComponent, ButtonComponent],
})
export class GadgetModule { }
