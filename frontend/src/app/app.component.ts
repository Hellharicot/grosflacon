import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Logo } from './logo/logo.component';
import { LinkButtonComponent } from './link-button/link-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, LinkButtonComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected readonly title = signal('GrosFlacon');
}
