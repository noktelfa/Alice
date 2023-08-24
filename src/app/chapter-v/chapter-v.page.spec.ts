import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterVPage } from './chapter-v.page';

describe('ChapterVPage', () => {
  let component: ChapterVPage;
  let fixture: ComponentFixture<ChapterVPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
