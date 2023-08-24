import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterXiPage } from './chapter-xi.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterXiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterXiPageRoutingModule {}
