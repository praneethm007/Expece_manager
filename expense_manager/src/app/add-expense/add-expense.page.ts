import { Component, OnInit } from '@angular/core';
import { EmDataBaseService } from '../em-data-base.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  //cred: EmDataBaseService;

  datevalue='';
  amount: number;
  people='';
  catogery='';
  amountpaidby='';
  discription='';
  location='';
  constructor(public cred: EmDataBaseService) { }
  datefun(){
    console.log(this.datevalue);
    console.log(this.amount);
    console.log(this.people);
    console.log(this.catogery);
    console.log(this.amountpaidby);
    console.log(this.discription);
    console.log(this.location);
  }
  createxpense(){
    this.cred.createexpense(this.datevalue,this.catogery,this.amount,this.people,this.discription,this.location).then((data)=>{
      this.location='';
      this.datevalue='';
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
