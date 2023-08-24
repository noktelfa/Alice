import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  {
    path: 'cover',
    loadChildren: () => import('./cover/cover.module').then( m => m.CoverPageModule)
  },
  {
    path: 'credits',
    loadChildren: () => import('./credits/credits.module').then( m => m.CreditsPageModule)
  },
  {
    path: 'chapter-i',
    loadChildren: () => import('./chapter-i/chapter-i.module').then( m => m.ChapterIPageModule)
  },
  {
    path: 'chapter-ii',
    loadChildren: () => import('./chapter-ii/chapter-ii.module').then( m => m.ChapterIiPageModule)
  },
  {
    path: 'chapter-iii',
    loadChildren: () => import('./chapter-iii/chapter-iii.module').then( m => m.ChapterIiiPageModule)
  },
  {
    path: 'chapter-iv',
    loadChildren: () => import('./chapter-iv/chapter-iv.module').then( m => m.ChapterIvPageModule)
  },
  {
    path: 'chapter-v',
    loadChildren: () => import('./chapter-v/chapter-v.module').then( m => m.ChapterVPageModule)
  },
  {
    path: 'chapter-vi',
    loadChildren: () => import('./chapter-vi/chapter-vi.module').then( m => m.ChapterViPageModule)
  },
  {
    path: 'chapter-vii',
    loadChildren: () => import('./chapter-vii/chapter-vii.module').then( m => m.ChapterViiPageModule)
  },
  {
    path: 'chapter-viii',
    loadChildren: () => import('./chapter-viii/chapter-viii.module').then( m => m.ChapterViiiPageModule)
  },
  {
    path: 'chapter-ix',
    loadChildren: () => import('./chapter-ix/chapter-ix.module').then( m => m.ChapterIxPageModule)
  },
  {
    path: 'chapter-x',
    loadChildren: () => import('./chapter-x/chapter-x.module').then( m => m.ChapterXPageModule)
  },
  {
    path: 'chapter-xi',
    loadChildren: () => import('./chapter-xi/chapter-xi.module').then( m => m.ChapterXiPageModule)
  },
  {
    path: 'chapter-xii',
    loadChildren: () => import('./chapter-xii/chapter-xii.module').then( m => m.ChapterXiiPageModule)
  },
  {
    path: 'gutenberg',
    loadChildren: () => import('./gutenberg/gutenberg.module').then( m => m.GutenbergPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./license/license.module').then( m => m.LicensePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
