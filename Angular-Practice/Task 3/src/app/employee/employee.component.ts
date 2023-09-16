import { Component } from '@angular/core';
import {Emp} from '../employee';
import{EMPLOYEE} from '../mock-data';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees:Emp[]=EMPLOYEE;
  
 
  
  

}
