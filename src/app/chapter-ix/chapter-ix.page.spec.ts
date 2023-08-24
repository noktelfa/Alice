import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterIxPage } from './chapter-ix.page';

describe('ChapterIxPage', () => {
  let component: ChapterIxPage;
  let fixture: ComponentFixture<ChapterIxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterIxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
