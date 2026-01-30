import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-form-checkbox',
  imports: [FormsModule, MatCheckboxModule, MatButtonToggleModule],
  templateUrl: './form-checkbox.html',
  styleUrl: './form-checkbox.css',
})
export class FormCheckboxComponent {
  placeholder = input.required<string>();
  name = input.required<string>();
  value = model<string[]>([]);
  options = input.required<string[]>();
  hideMultipleSelectionIndicator = signal(true);

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update((value) => !value);
  }

  toggleOptions(opt: string) {
    const current = this.value();
    if (current.includes(opt)) {
      this.value.set(current.filter((item) => item !== opt));
    } else {
      this.value.set([...current, opt]);
    }
  }
}
