import { Component } from '@angular/core';
import {Employee} from '../employee';
import{EMPLOYEE} from '../mock-data';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees: Employee[] = EMPLOYEE;
  currentEmployee?: Employee;
  enableTxtBox = true;

  myClick(employee: Employee){
    this.currentEmployee = employee;
  }
 
}
