import { Component, EventEmitter } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  constructor(private router:Router){

  }
  displayEmployee(event:any){
    console.log('Employee List.......');
    console.log(event);
  }
}
