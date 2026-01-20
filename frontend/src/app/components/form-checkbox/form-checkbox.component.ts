import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-checkbox',
  imports: [FormsModule],
  templateUrl: './form-checkbox.html',
  styleUrl: './form-checkbox.css',
})
export class FormCheckboxComponent {
  placeholder = input.required<string>();
  name = input.required<string>();
  value = model<string[]>([]);
  options = input.required<string[]>();

  toggleOptions(opt: string) {
    const current = this.value();
    if (current.includes(opt)) {
      this.value.set(current.filter((item) => item !== opt));
    } else {
      this.value.set([...current, opt]);
    }
    console.log(current);
  }
}
