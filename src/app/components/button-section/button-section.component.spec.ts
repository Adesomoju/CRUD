import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSectionComponent } from './button-section.component';

describe('ButtonSectionComponent', () => {
  let component: ButtonSectionComponent;
  let fixture: ComponentFixture<ButtonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
