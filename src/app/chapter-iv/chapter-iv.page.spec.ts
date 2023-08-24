import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterIvPage } from './chapter-iv.page';

describe('ChapterIvPage', () => {
  let component: ChapterIvPage;
  let fixture: ComponentFixture<ChapterIvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterIvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
