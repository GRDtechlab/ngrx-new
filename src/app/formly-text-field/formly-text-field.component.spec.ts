import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTextFieldComponent } from './formly-text-field.component';

describe('FormlyTextFieldComponent', () => {
  let component: FormlyTextFieldComponent;
  let fixture: ComponentFixture<FormlyTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyTextFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
