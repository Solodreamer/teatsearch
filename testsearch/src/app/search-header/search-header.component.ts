import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {SelectItem} from 'primeng/api';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
  providers: [DataService]
})
export class SearchHeaderComponent implements OnInit {

    // public users: SelectItem[] = new Array(); // ?
    // public stocksorts;
    // public matInventoryParam;
    public users;



   constructor(public datasvc: DataService) { }

  ngOnInit() {
    // this.getStockSorts();
     this.getUsers();
    // this.getUserDepartInfo();

  }
  private getUsers() {
       this.datasvc.getUsers()
       .subscribe(
        data => {
        this.users.departNo = data.label; },
        err => console.error(err),
        () => console.log('usercomplete')
       );
      }
/*
  getStockSorts() {
       this.datasvc.getStockSorts()
         .subscribe(
           data => {this.stocksorts = data;
           this.stocksorts = Array.of(this.stocksorts);
           },
           err => console.error('stocksorterr'),
           () => console.log('stocksortcomplete')
         );
       }




       private getUserDepartInfo(): void {
        this.datasvc.getUserDepartInfo().
          subscribe(
            res => this.matInventoryParam.stockNo = res.stockNo); //參考
      }
*/
}
