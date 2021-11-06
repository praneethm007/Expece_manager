import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  datevalue='';
  amount='';
  people='';
  catogery='';
  amountpaidby='';
  discription='';
  location='';
  constructor() { }
  datefun(){
    console.log(this.datevalue);
    console.log(this.amount);
    console.log(this.people);
    console.log(this.catogery);
    console.log(this.amountpaidby);
    console.log(this.discription);
    console.log(this.location);
  }

  ngOnInit() {
  }

}
