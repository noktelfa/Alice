import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterIiPageRoutingModule } from './chapter-ii-routing.module';

import { ChapterIiPage } from './chapter-ii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterIiPageRoutingModule
  ],
  declarations: [ChapterIiPage]
})
export class ChapterIiPageModule {}
