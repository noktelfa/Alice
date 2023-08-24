import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterViiiPage } from './chapter-viii.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterViiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterViiiPageRoutingModule {}
