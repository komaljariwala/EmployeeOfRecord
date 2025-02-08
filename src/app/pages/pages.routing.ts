import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardModule } from './dashboard/dashboard.module';

// import { AuthGuard } from '../core/services/common/auth-guard.service';

export const PagesRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'pages', component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                // canActivate: [AuthGuard]
            }
        ]
    }

];
