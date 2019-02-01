import { Component, OnInit } from '@angular/core';
import { StockDataService } from './stock-data.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css']
})
export class SearchBodyComponent implements OnInit {

  constructor(private stocksvc: StockDataService) { }

  ngOnInit() {
  }

}
