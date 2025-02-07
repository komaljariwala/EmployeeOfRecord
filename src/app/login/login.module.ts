import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
       RouterModule.forChild(LoginRoutes),
       FormsModule,
       ReactiveFormsModule,
       MatFormFieldModule,
       MatInputModule,
       MatButtonModule,
  ]
})
export class LoginModule { }
