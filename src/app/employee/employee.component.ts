import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  employee: Employee = {
    employeeId: 0,
    employeeName: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeDepartment: '',
    employeeSkills: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
