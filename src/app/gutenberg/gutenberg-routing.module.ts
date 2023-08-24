import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GutenbergPage } from './gutenberg.page';

const routes: Routes = [
  {
    path: '',
    component: GutenbergPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GutenbergPageRoutingModule {}
