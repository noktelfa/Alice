import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterIiiPage } from './chapter-iii.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterIiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterIiiPageRoutingModule {}
