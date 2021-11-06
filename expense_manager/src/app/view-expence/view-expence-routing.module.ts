import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewExpencePage } from './view-expence.page';

const routes: Routes = [
  {
    path: '',
    component: ViewExpencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewExpencePageRoutingModule {}
