import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterXiiPage } from './chapter-xii.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterXiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterXiiPageRoutingModule {}
