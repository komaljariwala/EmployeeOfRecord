import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
   declarations: [DashboardComponent],
    imports: [
      CommonModule,
         RouterModule.forChild(DashboardRoutes),
         FormsModule,
         ReactiveFormsModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
    ]
})
export class DashboardModule { }
