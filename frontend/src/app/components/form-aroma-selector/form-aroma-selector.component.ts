import { KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aromas } from '@app/pages/new-tasting-note/new-tasting-note.component';

@Component({
  selector: 'app-form-aroma-selector',
  imports: [FormsModule, ReactiveFormsModule, KeyValuePipe],
  templateUrl: './form-aroma-selector.html',
  styleUrl: './form-aroma-selector.css',
})
export class FormAromaSelectorComponent {
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() families: Aromas[] = [];

  aromaControl = new FormControl<string[]>([]);

  toggleOptions(aroma: string) {
    const current = this.aromaControl.value || [];
    this.aromaControl.setValue(
      current.includes(aroma)
        ? current.filter((item) => item !== aroma)
        : [...current, aroma]
    );
  }
}
