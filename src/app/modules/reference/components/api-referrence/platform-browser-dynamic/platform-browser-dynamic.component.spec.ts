import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformBrowserDynamicComponent } from './platform-browser-dynamic.component';

describe('PlatformBrowserDynamicComponent', () => {
  let component: PlatformBrowserDynamicComponent;
  let fixture: ComponentFixture<PlatformBrowserDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformBrowserDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformBrowserDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
