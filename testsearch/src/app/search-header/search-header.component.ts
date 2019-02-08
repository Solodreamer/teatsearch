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

  public users: SelectItem[] = new Array();
  public stocksorts: SelectItem[] = new Array();



  constructor(public datasvc: DataService) { }


  ngOnInit() {
    this.getUsers();
    this.getStockSorts();


    // this.getUserDepartInfo();

  }
  private getUsers(): void {
       this.datasvc.getUsers()
       .subscribe(
        data => {
          data.forEach(item => {
             this.users.push({label: `${item.departNo} - ${item.shortName}`, value: item.departNo});
          });
         },
        err => console.error(err),
        () => console.log('usercomplete')
       );
      }


  private getStockSorts(): void {
      this.datasvc.getStockSorts()
      .subscribe(
      data => {
        data.forEach(item => {
          this.stocksorts.push({label: item.value , value: item.code});

        });
       },
      err => console.error(err),
      () => console.log('stocksortcomplete')
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
