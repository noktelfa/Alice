import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterViPage } from './chapter-vi.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterViPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterViPageRoutingModule {}
