import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html'
})
export class LeaveComponent implements OnInit {
  leaveList = [
    { type: 'Sick Leave', status: 'Approved' },
    { type: 'Casual Leave', status: 'Pending' },
    { type: 'Maternity Leave', status: 'Approved' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
