import { Component } from '@angular/core';
import { Logo } from '@components/logo/logo.component';
import { LinkButtonComponent } from '@components/link-button/link-button.component';

@Component({
  selector: 'app-homepage',
  imports: [Logo, LinkButtonComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class HomepageComponent {}
