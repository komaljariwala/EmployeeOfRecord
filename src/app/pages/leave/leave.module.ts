import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { LeaveRoutes } from './leave.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LeaveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LeaveRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeaveModule { }
