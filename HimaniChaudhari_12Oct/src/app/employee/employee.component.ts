import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() 
  data:any;

  @Input()
  costumerInput:string="";
 
  @Output()
  eventobj:EventEmitter<string> = new EventEmitter();

  EmployeeData:string="Its employeedata";

  sendData(data:any){

    this.eventobj.emit(this.EmployeeData);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
