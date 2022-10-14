import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  Amount:number=30000
  constructor(private route:ActivatedRoute) {

    route.params.subscribe( (param:any) => {this.Amount = param['amount']; console.log(this.Amount)});

 }

  ngOnInit(): void {
  }

}
