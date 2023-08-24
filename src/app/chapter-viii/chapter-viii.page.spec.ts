import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterViiiPage } from './chapter-viii.page';

describe('ChapterViiiPage', () => {
  let component: ChapterViiiPage;
  let fixture: ComponentFixture<ChapterViiiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterViiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
