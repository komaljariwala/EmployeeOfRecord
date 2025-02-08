import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // Component logic here
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    console.log('Registration form initialized', this.registrationForm);
    if (!this.employeeService) {
      console.error('EmployeeService is not injected properly');
    } else {
      console.log('EmployeeService injected successfully');
    }
    console.log('EmployeeService instance:', this.employeeService);
  }

  ngOnInit() {
    // Initialization logic here
    console.log('RegistrationComponent initialized');
  }

  onSubmit() {
    console.log('Form submission triggered');
    console.log('Form value:', this.registrationForm.value);
    console.log('Form valid:', this.registrationForm.valid);
    if (this.registrationForm.valid) {
      console.log('Form is valid, calling saveEmployee');
       this.employeeService.register(this.registrationForm.value).subscribe(() => {
        console.log('Employee added successfully');
        alert('Employee added successfully');
    });
    } else {
      console.log('Form is invalid');
      alert('Please fill out the form correctly.');
    }
  }
}
