import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterXPageRoutingModule } from './chapter-x-routing.module';

import { ChapterXPage } from './chapter-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterXPageRoutingModule
  ],
  declarations: [ChapterXPage]
})
export class ChapterXPageModule {}
