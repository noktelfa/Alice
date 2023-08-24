import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterXiPage } from './chapter-xi.page';

describe('ChapterXiPage', () => {
  let component: ChapterXiPage;
  let fixture: ComponentFixture<ChapterXiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterXiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
