import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterIiPage } from './chapter-ii.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterIiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterIiPageRoutingModule {}
