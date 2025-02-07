import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];
