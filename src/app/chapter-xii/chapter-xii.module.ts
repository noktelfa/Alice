import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterXiiPageRoutingModule } from './chapter-xii-routing.module';

import { ChapterXiiPage } from './chapter-xii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterXiiPageRoutingModule
  ],
  declarations: [ChapterXiiPage]
})
export class ChapterXiiPageModule {}
