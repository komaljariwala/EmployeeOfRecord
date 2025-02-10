import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollModuleComponent } from './payroll-module.component';
import { PayrollModuleRoutes } from './payroll-module.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PayrollModuleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PayrollModuleRoutes),
  ]
})
export class PayrollModule { }
