import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { StaffRoutes } from './staff.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StaffRoutes),
  ]
})
export class StaffModule { }
