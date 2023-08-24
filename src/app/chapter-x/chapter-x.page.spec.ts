import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterXPage } from './chapter-x.page';

describe('ChapterXPage', () => {
  let component: ChapterXPage;
  let fixture: ComponentFixture<ChapterXPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
