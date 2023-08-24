import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterIPageRoutingModule } from './chapter-i-routing.module';

import { ChapterIPage } from './chapter-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterIPageRoutingModule
  ],
  declarations: [ChapterIPage]
})
export class ChapterIPageModule {}
