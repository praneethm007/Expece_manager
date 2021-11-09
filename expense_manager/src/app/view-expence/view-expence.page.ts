import { Component, OnInit } from '@angular/core';
import { EmDataBaseService } from '../em-data-base.service';

@Component({
  selector: 'app-view-expence',
  templateUrl: './view-expence.page.html',
  styleUrls: ['./view-expence.page.scss'],
})
export class ViewExpencePage implements OnInit {
  expenses: any=[];

  constructor(public creed:EmDataBaseService) { 
    this.getexpensess()
  }

  ngOnInit() {
  }
  getexpensess(){
    this.creed.getexpenses().then((data)=>{
    this.expenses=[];
    if(data.rows.length > 0){
      for(var i=0; i<data.rows.length; i++){
        this.expenses.push({
          id: data.rows.item(i).id,
          datetime:data.rows.item(i).datetime,
          categories: data.rows.item(i).categories,
          amount: data.rows.item(i).amount,
          people: data.rows.item(i).people,
          discription: data.rows.item(i).discription,
          location: data.rows.item(i).location
        });
      }
      console.log(this.expenses);
    }
  });
  }
  
  deleteexpense(id: number){
    this.creed.deleteexpence(id);
    this.getexpensess()
    console.log(id);

  }

}
