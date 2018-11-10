import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GadgetComponent } from './gadget.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LinkComponent } from './atoms/link/link.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [GadgetComponent, ButtonComponent, LinkComponent],
  exports: [GadgetComponent, ButtonComponent, LinkComponent],
})
export class GadgetModule {}
