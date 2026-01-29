import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AromaFamily } from '@app/pages/new-tasting-note/formstep';

@Component({
  selector: 'app-form-aroma-selector',
  imports: [FormsModule],
  templateUrl: './form-aroma-selector.html',
  styleUrl: './form-aroma-selector.css',
})
export class FormAromaSelectorComponent {
  placeholder = input.required<string>();
  name = input.required<string>();
  value = model<string[]>([]);
  families = input.required<AromaFamily[]>();
  openSubFamily = signal<string | null>(null);

  toggleShow(subName: string) {
    this.openSubFamily.update((current) =>
      current === subName ? null : subName,
    );
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
