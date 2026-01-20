import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '@app/components/form-input/form-input.component';
import { FormRadioComponent } from '@app/components/form-radio/form-radio.component';
import { FormCheckboxComponent } from '@app/components/form-checkbox/form-checkbox.component';

interface FormStep {
  type: 'input' | 'radio' | 'checkbox';
  name: string;
  placeholder: string;
  value: string | string[];
  opts?: string[];
}

@Component({
  selector: 'app-new-tasting-note',
  imports: [
    ReactiveFormsModule,
    FormInputComponent,
    FormRadioComponent,
    FormCheckboxComponent,
  ],
  templateUrl: './new-tasting-note.html',
  styleUrl: './new-tasting-note.css',
})
export class NewTastingNoteComponent {
  steps: FormStep[] = [
    { type: 'input', value: '', name: 'country', placeholder: 'Pays' },
    { type: 'input', value: '', name: 'region', placeholder: 'Région' },
    {
      type: 'input',
      value: '',
      name: 'appellation',
      placeholder: 'Appellation',
    },
    { type: 'input', value: '', name: 'property', placeholder: 'Domaine' },
    {
      type: 'radio',
      value: '',
      name: 'color',
      placeholder: 'Couleur',
      opts: ['blanc', 'rosé', 'rouge'],
    },
    { type: 'input', value: '', name: 'year', placeholder: 'Année' },
    {
      type: 'checkbox',
      value: '',
      name: 'aromas',
      placeholder: 'Bouquet',
      opts: ['fruité', 'floral', 'épicé', 'animal', 'herbacé', 'minéral'],
    },
  ];

  wineIdForm = new FormGroup({
    country: new FormControl<string>(''),
    region: new FormControl<string>(''),
    appellation: new FormControl<string>(''),
    property: new FormControl<string>(''),
    color: new FormControl<string>(''),
    year: new FormControl<string>(''),
  });
}
