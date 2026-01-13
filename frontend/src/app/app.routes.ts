import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewTastingNoteComponent } from './pages/new-tasting-note/new-tasting-note.component';
export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'new-tasting-note',
    component: NewTastingNoteComponent,
  },
];
