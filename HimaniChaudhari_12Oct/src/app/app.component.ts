import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApplication';
  PaymentData="Payment is done"
  mycolor="Green"
 Flag:boolean=true
 Ldate= new Date (2002,8,15)
 choice:string=""
 data:string=""
 names:string[]=["himani","Utkarsh","pooja","snehal"]

 dataFromEmployee:string=""

 getData(data:any){

  
    
  console.log(data);
   this.dataFromEmployee=data;
}

}






