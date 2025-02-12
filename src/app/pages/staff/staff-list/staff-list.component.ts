import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffList: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadStaffList();
  }

  loadStaffList(): void {
    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        this.staffList = data;
        console.log('this.staffList =>', this.staffList);
      },
      (error) => {
        if (error.status === 404) {
          console.error('API not found', error);
        } else {
          console.error('Error fetching staff list', error);
        }
      }
    );
  }
}
