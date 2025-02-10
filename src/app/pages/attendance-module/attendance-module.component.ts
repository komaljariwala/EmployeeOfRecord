import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-module',
  templateUrl: './attendance-module.component.html'
})
export class AttendanceModuleComponent implements OnInit {
  attendanceList = [
    { date: '2023-10-01', status: 'Present' },
    { date: '2023-10-02', status: 'Absent' },
    { date: '2023-10-03', status: 'Present' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
