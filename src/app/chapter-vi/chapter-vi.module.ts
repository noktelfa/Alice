import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterViPageRoutingModule } from './chapter-vi-routing.module';

import { ChapterViPage } from './chapter-vi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterViPageRoutingModule
  ],
  declarations: [ChapterViPage]
})
export class ChapterViPageModule {}
