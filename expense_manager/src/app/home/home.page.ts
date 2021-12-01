import { Component } from '@angular/core';
import { EmDataBaseService } from '../em-data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private crud:EmDataBaseService) {
    this.crud.createdb();
  }

}
