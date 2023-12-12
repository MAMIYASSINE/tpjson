import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
employees = new Array<Employee>();
constructor( empService:EmployeeService ) {
empService.getEmployees().subscribe((response: Employee[]) => this.employees = response )
}
}

