import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  amount:number = 465;

  
// router
  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }
  getFormData(data:any){

    this.username = data.username;
    this.password = data.password;
  
    console.log(this.username +" "+ this.password)
  
    if(this.username == "himani" && this.password == "12345"){
  
      // route to the payment page
  
        this.router.navigate(['payment/'+this.amount]);
  
    }
  
  }
  

}
