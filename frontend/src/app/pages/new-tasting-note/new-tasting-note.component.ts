import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '@app/components/form-input/form-input.component';
import { FormRadioComponent } from '@app/components/form-radio/form-radio.component';
import { FormCheckboxComponent } from '@app/components/form-checkbox/form-checkbox.component';
import { FormAromaSelectorComponent } from '@app/components/form-aroma-selector/form-aroma-selector.component';
import { FORM_STEPS } from './formstep';

@Component({
  selector: 'app-new-tasting-note',
  imports: [
    ReactiveFormsModule,
    FormInputComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormAromaSelectorComponent,
  ],
  templateUrl: './new-tasting-note.html',
  styleUrl: './new-tasting-note.css',
})
export class NewTastingNoteComponent {
  steps = FORM_STEPS;

  wineIdForm = new FormGroup({
    country: new FormControl<string>(''),
    region: new FormControl<string>(''),
    appellation: new FormControl<string>(''),
    property: new FormControl<string>(''),
    color: new FormControl<string>(''),
    year: new FormControl<string>(''),
  });
}
