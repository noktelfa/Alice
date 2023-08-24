import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterIiPage } from './chapter-ii.page';

describe('ChapterIiPage', () => {
  let component: ChapterIiPage;
  let fixture: ComponentFixture<ChapterIiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterIiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
