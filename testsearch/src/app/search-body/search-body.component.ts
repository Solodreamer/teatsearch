import { Component, OnInit } from '@angular/core';
import { StockDataService } from './stock-data.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css']
})
export class SearchBodyComponent implements OnInit {
  public stockdata;

  constructor(private stocksvc: StockDataService) { }

  ngOnInit() {
    this.updateStockdata();
  }

  private updateStockdata(): void {
    this.stocksvc.updateStockdata()
    .subscribe(
      data => this.stockdata = data,
      err => console.error('stockdataerr'),
      () => console.log('stockdata complete')
    );
  }

}
