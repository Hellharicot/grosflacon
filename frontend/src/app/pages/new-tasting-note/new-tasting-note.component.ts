import { Component, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { ApiService } from '@app/services/api';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '@app/components/form-input/form-input.component';
import { FormRadioComponent } from '@app/components/form-radio/form-radio.component';
import { FormCheckboxComponent } from '@app/components/form-checkbox/form-checkbox.component';
import { FormAromaSelectorComponent } from '@app/components/form-aroma-selector/form-aroma-selector.component';
import { ApiResponse } from '@app/services/api';

export interface Aromas {
  [category: string]: {
    [subcategory: string]: string[]
  }
};

export interface FormStep {
  criterion: string;
  default_description: string;
  category: string;
  input_type: string;
  opts: Aromas[];
}

@Component({
  selector: 'app-new-tasting-note',
  imports: [
    ReactiveFormsModule,
    FormInputComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    //FormAromaSelectorComponent,
    KeyValuePipe,
  ],
  templateUrl: './new-tasting-note.html',
  styleUrl: './new-tasting-note.css',
})

export class NewTastingNoteComponent implements OnInit {
  responseData: ApiResponse | null = null;
  steps: FormStep[] = [];

  wineIdForm = new FormGroup({
    country: new FormControl<string>(''),
    region: new FormControl<string>(''),
    appellation: new FormControl<string>(''),
    property: new FormControl<string>(''),
    color: new FormControl<string>(''),
    year: new FormControl<string>(''),
  });

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTest().subscribe({
      next: (response: ApiResponse) => {
        this.responseData = response;
        this.steps = this.responseData.data;
        const aromaStep = this.steps.find(step => step.criterion === 'aromas');
        const flavorStep = this.steps.find(step => step.criterion === 'flavors');
        console.log(this.steps);
        if (aromaStep) {
          console.log('Aromas: ', aromaStep.opts[0]);
        }
        if (flavorStep) {
          console.log('Flavors: ', flavorStep.opts[0]);
        }
      },
      error: (err) => {
        console.error('Erreur:', err);
      }
    });
  }
}
