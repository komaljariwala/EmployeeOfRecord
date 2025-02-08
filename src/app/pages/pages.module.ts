import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatLabelModule } from '@angular/material/label';

import { PagesRoutes } from './pages.routing';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    // MatLabelModule,
    MatFormFieldModule

  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers:[
    
  ]
})

export class PagesModule {}
