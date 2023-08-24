import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterVPageRoutingModule } from './chapter-v-routing.module';

import { ChapterVPage } from './chapter-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterVPageRoutingModule
  ],
  declarations: [ChapterVPage]
})
export class ChapterVPageModule {}
