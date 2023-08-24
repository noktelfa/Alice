import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterIvPage } from './chapter-iv.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterIvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterIvPageRoutingModule {}
