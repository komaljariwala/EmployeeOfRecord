import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffFormComponent } from './staff-form.component';
import { routing } from './staff-form.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [StaffFormComponent],
    imports: [
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class StaffFormModule { }