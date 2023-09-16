import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EMPLOYEE } from '../mock-data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  emp:Employee=EMPLOYEE
}

