import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutsidePageRoutingModule } from './outside-routing.module';

import { OutsidePage } from './outside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutsidePageRoutingModule
  ],
  declarations: [OutsidePage]
})
export class OutsidePageModule {}
