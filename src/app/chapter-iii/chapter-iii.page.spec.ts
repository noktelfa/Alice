import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterIiiPage } from './chapter-iii.page';

describe('ChapterIiiPage', () => {
  let component: ChapterIiiPage;
  let fixture: ComponentFixture<ChapterIiiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterIiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
