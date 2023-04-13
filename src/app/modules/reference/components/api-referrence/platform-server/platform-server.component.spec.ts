import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformServerComponent } from './platform-server.component';

describe('PlatformServerComponent', () => {
  let component: PlatformServerComponent;
  let fixture: ComponentFixture<PlatformServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
