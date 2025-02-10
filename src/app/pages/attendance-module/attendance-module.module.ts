import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceModuleComponent } from './attendance-module.component';
import { AttendanceModuleRoutes } from './attendance-module.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AttendanceModuleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AttendanceModuleRoutes),
  ]
})
export class AttendanceModule { }
