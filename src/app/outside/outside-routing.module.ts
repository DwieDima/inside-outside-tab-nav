import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutsidePage } from './outside.page';

const routes: Routes = [
  {
    path: '',
    component: OutsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutsidePageRoutingModule {}
