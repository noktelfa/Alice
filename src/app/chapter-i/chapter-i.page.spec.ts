import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterIPage } from './chapter-i.page';

describe('ChapterIPage', () => {
  let component: ChapterIPage;
  let fixture: ComponentFixture<ChapterIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
