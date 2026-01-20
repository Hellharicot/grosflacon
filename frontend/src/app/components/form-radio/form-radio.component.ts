import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  imports: [FormsModule],
  templateUrl: './form-radio.html',
  styleUrl: './form-radio.css',
})
export class FormRadioComponent {
  placeholder = input.required<string>();
  name = input.required<string>();
  value = model<string>();
  options = input.required<string[]>();
}
