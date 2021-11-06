import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewExpencePageRoutingModule } from './view-expence-routing.module';

import { ViewExpencePage } from './view-expence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewExpencePageRoutingModule
  ],
  declarations: [ViewExpencePage]
})
export class ViewExpencePageModule {}
