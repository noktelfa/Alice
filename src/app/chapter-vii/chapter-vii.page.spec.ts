import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapterViiPage } from './chapter-vii.page';

describe('ChapterViiPage', () => {
  let component: ChapterViiPage;
  let fixture: ComponentFixture<ChapterViiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChapterViiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
