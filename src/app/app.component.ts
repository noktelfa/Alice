import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public chapters = [
    { title: 'Cover', url: '/cover', icon: '' },
    { title: 'Credits', url: '/credits', icon: '' },
    { title: 'Project Gutenberg', url: '/gutenberg', icon: '' },
    { title: 'Chapter I', url: '/chapter-i', icon: '' },
    { title: 'Chapter II', url: '/chapter-ii', icon: '' },
    { title: 'Chapter III', url: '/chapter-iii', icon: '' },
    { title: 'Chapter IV', url: '/chapter-iv', icon: '' },
    { title: 'Chapter V', url: '/chapter-v', icon: '' },
    { title: 'Chapter VI', url: '/chapter-vi', icon: '' },
    { title: 'Chapter VII', url: '/chapter-vii', icon: '' },
    { title: 'Chapter VIII', url: '/chapter-viii', icon: '' },
    { title: 'Chapter IX', url: '/chapter-ix', icon: '' },
    { title: 'Chapter X', url: '/chapter-x', icon: '' },
    { title: 'Chapter XI', url: '/chapter-xi', icon: '' },
    { title: 'Chapter XII', url: '/chapter-xii', icon: '' },
    { title: 'Gutenberg License', url: '/license', icon: '' },


  ];

}