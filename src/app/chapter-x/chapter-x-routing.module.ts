import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterXPage } from './chapter-x.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterXPageRoutingModule {}
