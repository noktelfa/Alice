import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GutenbergPageRoutingModule } from './gutenberg-routing.module';

import { GutenbergPage } from './gutenberg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GutenbergPageRoutingModule
  ],
  declarations: [GutenbergPage]
})
export class GutenbergPageModule {}
