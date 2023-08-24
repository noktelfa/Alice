import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterVPage } from './chapter-v.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterVPageRoutingModule {}
