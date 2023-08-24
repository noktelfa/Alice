import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterViPage } from './chapter-vi.page';

describe('ChapterViPage', () => {
  let component: ChapterViPage;
  let fixture: ComponentFixture<ChapterViPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterViPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
