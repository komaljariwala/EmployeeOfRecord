
import { RouterModule, Routes } from '@angular/router';
import { StaffFormComponent } from './staff-form.component';



const routes: Routes = [
  { path: '', component: StaffFormComponent },
  { path: ':id', component: StaffFormComponent }
];

export const routing = RouterModule.forChild(routes);
