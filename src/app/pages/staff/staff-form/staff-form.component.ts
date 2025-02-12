import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {
  
  staffForm: FormGroup;
  designations: string[] = ['Manager', 'Developer', 'Designer', 'Tester', 'HR'];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { 
    this.staffForm = this.fb.group({
      fullname: new FormControl(''),
      designation: new FormControl(''),
      phonenumber: new FormControl(''),
      email: new FormControl(''),
      dateofbirth: new FormControl(''),
      joiningdate: new FormControl('')
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){   
    console.log('this.staffForm.value =>', this.staffForm.value);
    if (this.staffForm.valid) {
      console.log('Form is valid, calling saveEmployee');
       this.employeeService.addEmployee(this.staffForm.value).subscribe(() => {
        console.log('Employee added successfully');
        alert('Employee added successfully');
    });
    } else {
      console.log('Form is invalid');
      alert('Please fill out the form correctly.');
    }
  }
}
