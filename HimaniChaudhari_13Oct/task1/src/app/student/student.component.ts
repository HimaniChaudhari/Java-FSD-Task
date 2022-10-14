import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  stud:Student={"Name":"","Contact":0,"Email":""}

  constructor() { }

  ngOnInit(): void {
  }
  getFormData(data:Student){
  
  }

}
