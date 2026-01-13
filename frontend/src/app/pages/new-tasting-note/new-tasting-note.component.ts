import { Component, input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tasting-note',
  imports: [ReactiveFormsModule],
  templateUrl: './new-tasting-note.html',
  styleUrl: './new-tasting-note.css',
})
export class NewTastingNoteComponent {
  steps = [
    { name: 'country', placeholder: 'Pays' },
    { name: 'region', placeholder: 'Région' },
    { name: 'appellation', placeholder: 'Appellation' },
    { name: 'property', placeholder: 'Domaine' },
    { name: 'color', placeholder: 'Couleur' },
    { name: 'year', placeholder: 'Année' }
  ];

  wineIdForm = new FormGroup({
    country: new FormControl<string>(""),
    region: new FormControl<string>(""),
    appellation: new FormControl<string>(""),
    property: new FormControl<string>(""),
    color: new FormControl<string>(""),
    year: new FormControl<string>(""),
  });
}
