import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './atoms/button/button.component';
import { LinkComponent } from './atoms/link/link.component';
import { GadgetComponent } from './gadget.component';
import { SingleColumnComponent } from './templates/single-column/single-column.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [GadgetComponent, ButtonComponent, LinkComponent, SingleColumnComponent],
  exports: [GadgetComponent, ButtonComponent, LinkComponent],
})
export class GadgetModule {}
