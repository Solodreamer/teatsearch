import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invtype } from '../invtype';



@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }

  public updateStockdata(): Observable<Array<any>> {
    const url = 'http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetMatStockTakings/';
    return this.http.put<Array<any>>(url, Invtype);

  }




}
