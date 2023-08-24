import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterViiPage } from './chapter-vii.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterViiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterViiPageRoutingModule {}
