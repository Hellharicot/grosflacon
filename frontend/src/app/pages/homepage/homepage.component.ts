import { Component } from '@angular/core';
import { Logo } from '@components/logo/logo.component';
import { LinkButtonComponent } from '@components/link-button/link-button.component';

@Component({
  selector: 'app-homepage',
  imports: [Logo, LinkButtonComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})

export class HomepageComponent {
  fetchData() {
    fetch('http://localhost:3000/api/users/roles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Données reçues: ', data);
        alert(JSON.stringify(data, null, 2));
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        alert('Erreur lors de la récupération des données');
      });
  }
}
