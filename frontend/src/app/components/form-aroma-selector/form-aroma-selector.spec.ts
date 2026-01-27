import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAromaSelector } from './form-aroma-selector';

describe('FormAromaSelector', () => {
  let component: FormAromaSelector;
  let fixture: ComponentFixture<FormAromaSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAromaSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAromaSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
