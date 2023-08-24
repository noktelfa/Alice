import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterIxPageRoutingModule } from './chapter-ix-routing.module';

import { ChapterIxPage } from './chapter-ix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterIxPageRoutingModule
  ],
  declarations: [ChapterIxPage]
})
export class ChapterIxPageModule {}
