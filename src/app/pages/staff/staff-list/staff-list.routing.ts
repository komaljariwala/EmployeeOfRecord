
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from '../staff-list/staff-list.component';



const routes: Routes = [
  { path: '', component: StaffListComponent },
  { path: ':id', component: StaffListComponent }
];

export const routing = RouterModule.forChild(routes);
