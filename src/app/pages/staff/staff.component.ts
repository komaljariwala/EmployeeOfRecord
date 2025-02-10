import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  staffList = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Michael Johnson' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
