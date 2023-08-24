import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterIxPage } from './chapter-ix.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterIxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterIxPageRoutingModule {}
