import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  employee: Employee = {
    employeeId: 1,
    employeeName: 'Uchithma',
    employeeContactNumber: '6568498498',
    employeeAddress: 'Galle',
    employeeGender: 'F',
    employeeDepartment: 'IT',
    employeeSkills: 'Java',
  };
  constructor() {}

  ngOnInit(): void {}
}
