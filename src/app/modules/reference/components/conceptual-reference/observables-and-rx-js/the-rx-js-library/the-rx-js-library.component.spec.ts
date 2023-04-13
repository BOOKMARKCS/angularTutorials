import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRxJSLibraryComponent } from './the-rx-js-library.component';

describe('TheRxJSLibraryComponent', () => {
  let component: TheRxJSLibraryComponent;
  let fixture: ComponentFixture<TheRxJSLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheRxJSLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheRxJSLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
