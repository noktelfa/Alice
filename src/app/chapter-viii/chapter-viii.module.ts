import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterViiiPageRoutingModule } from './chapter-viii-routing.module';

import { ChapterViiiPage } from './chapter-viii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterViiiPageRoutingModule
  ],
  declarations: [ChapterViiiPage]
})
export class ChapterViiiPageModule {}
