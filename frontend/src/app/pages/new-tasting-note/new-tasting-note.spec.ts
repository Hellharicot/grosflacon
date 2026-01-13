import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTastingNote } from './new-tasting-note';

describe('NewTastingNote', () => {
  let component: NewTastingNote;
  let fixture: ComponentFixture<NewTastingNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTastingNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTastingNote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
