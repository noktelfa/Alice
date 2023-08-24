import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GutenbergPage } from './gutenberg.page';

describe('GutenbergPage', () => {
  let component: GutenbergPage;
  let fixture: ComponentFixture<GutenbergPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GutenbergPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
