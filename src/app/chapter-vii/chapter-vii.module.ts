import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterViiPageRoutingModule } from './chapter-vii-routing.module';

import { ChapterViiPage } from './chapter-vii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterViiPageRoutingModule
  ],
  declarations: [ChapterViiPage]
})
export class ChapterViiPageModule {}
