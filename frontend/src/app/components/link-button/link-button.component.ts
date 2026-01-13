import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-button',
  imports: [RouterLink],
  templateUrl: './link-button.html',
  styleUrl: './link-button.css',
})
export class LinkButtonComponent {
  label = input.required<string>();
  link = input.required<string>();
}
