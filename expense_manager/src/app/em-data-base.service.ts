import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class EmDataBaseService {
  databaseObj: SQLiteObject;
  table = {
    expensestable: "expensestable"
  }
  constructor(private sqlite: SQLite) { }

  async createdb() {
    await this.sqlite
      .create({
        name: "emdatabase",
        location: "default",
      })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
        console.log("database createdtttttttttttttttttt")
      })
      .catch((e) => {
        alert("error on creating database" + JSON.stringify(e));
      });
    await this.createtable()
  }


  async createtable() {
    await this.databaseObj.executeSql(
      `create table if not exists ${this.table.expensestable} 
      (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        datetime TEXT, 
        categories TEXT, 
        amount INTEGER, 
        people TEXT, 
        discription TEXT,
        location TEXT)`, []
    ).then(() => {
      //this.databaseObj = db;
      console.log("tableee createdtttttttttttttttttt")
    })
      .catch((e) => {
        alert("error on creating database" + JSON.stringify(e));
      });

  }


  async createexpense(
    datetime: string,
    categories: string,
    amount: number,
    people: string,
    discription: string,
    location: string) {
    return this.databaseObj.executeSql(
      `insert into ${this.table.expensestable} (datetime,categories,amount,people,discription,location) VALUES
       ('${datetime}','${categories}','${amount}','${people}','${discription}','${location}')`, []
    ).then(() => {
      console.log(location, datetime, amount, categories, people, discription)
      return "location created"
    }).catch((e) => {
      if (e.code == 6) {
        return "category already created"
      }
    })
  }


  async getexpenses() {
    return this.databaseObj.executeSql(
      `select * from ${this.table.expensestable} order by id DESC`,
      []
    ).then((res) => {
      return res;
    }).catch((e) => {
      return "error on getting category" + JSON.stringify(e);
    });

  }
  async deleteexpence(id: number) {
    return this.databaseObj.executeSql(
      `delete from  ${this.table.expensestable} where id=${id}`, [])
      .then(() => {
        return "expense deleted";
      }).catch((e) => {
        return "error on deleting expense" + JSON.stringify(e);
      });
  }
  
  async editexpence(
    id: number,
    datetime: string,
    categories: string,
    amount: number,
    people: string,
    discription: string,
    location: string) {
    return this.databaseObj.executeSql(
      `update ${this.table.expensestable}
         set datetime=${datetime},
         categories=${categories},
         amount=${amount},
         people=${people},
         discription=${discription},
         location=${location} 
       where id=${id}`
    ).then(() => {
      return "expense updated";
    }).catch((e) => {
      if (e.code == 6) {
        return "expense already created"
      }
      return "error on updatingcategory" + JSON.stringify(e)
    })

  }
}