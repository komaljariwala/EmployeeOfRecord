import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { StaffRoutes } from './staff.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StaffRoutes),
    FormsModule,
    ReactiveFormsModule,
     AppMaterialModule,
        MatFormFieldModule,
    
  ]
})
export class StaffModule { }
