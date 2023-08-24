import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterXiiPage } from './chapter-xii.page';

describe('ChapterXiiPage', () => {
  let component: ChapterXiiPage;
  let fixture: ComponentFixture<ChapterXiiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterXiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
