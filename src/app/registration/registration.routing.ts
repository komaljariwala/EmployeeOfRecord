import { Routes } from '@angular/router';

import { RegistrationComponent } from './registration.component';

export const RegistrationRoutes: Routes = [
  {
    path: 'registration', component: RegistrationComponent,
    children: [
      // { path: '', redirectTo: 'registration', pathMatch: 'full' },

      // {
      //   path: 'registration',
      //   loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
      // }
      // ...existing routes...
    ]
  }
];