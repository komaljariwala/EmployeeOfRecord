import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffListComponent } from './staff-list.component';
import { routing } from './staff-list.routing';


@NgModule({
    declarations: [StaffListComponent],
    imports: [
        CommonModule,
        routing
    ]
})
export class StaffListModule { }