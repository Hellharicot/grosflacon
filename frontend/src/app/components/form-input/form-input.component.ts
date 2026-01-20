import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInputComponent {
  placeholder = input.required<string>();
  name = input.required<string>();
  parentForm = input.required<FormGroup>();
}
