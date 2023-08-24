import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterIiiPageRoutingModule } from './chapter-iii-routing.module';

import { ChapterIiiPage } from './chapter-iii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterIiiPageRoutingModule
  ],
  declarations: [ChapterIiiPage]
})
export class ChapterIiiPageModule {}
