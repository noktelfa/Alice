import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterIvPageRoutingModule } from './chapter-iv-routing.module';

import { ChapterIvPage } from './chapter-iv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterIvPageRoutingModule
  ],
  declarations: [ChapterIvPage]
})
export class ChapterIvPageModule {}
