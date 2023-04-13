import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGasTemplatesComponent } from './svgas-templates.component';

describe('SVGasTemplatesComponent', () => {
  let component: SVGasTemplatesComponent;
  let fixture: ComponentFixture<SVGasTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVGasTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SVGasTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
