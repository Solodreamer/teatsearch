import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SelectItem } from 'primeng/api';
// import { UserDepartInfo } from '../app/search-header/search-header.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
     }

     public getUsers(): Observable<Array<any>> { // getUsers()為取得使用者責任中心清單
      const url = 'http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetDepartmentInfos';
      return this.http.get<Array<any>>(url);
    }
/*
    getStockSorts() { // getStocksorts()為取得庫存分類選項清單
      return this.http.get('http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetOptionInfos/MatStockMt/invType');
*/

  /*  getUsers(): Observable<Array<SelectItem>> {
      return this.http.get('http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatStock/GetDepartmentInfos')
      .pipe(
        map(p => { label: departNo+'-'+shortNam,
                  value: shortNam})
      );
    }

/*
    public getUserDepartInfo(): Observable<UserDepartInfo> {
       const url = 'http://test.his.cmuh.org.tw/WebApi/MatStockManager/MatDemand/GetMatStockItem/A59463'; //參考
       return this.http.get<UserDepartInfo>(url);
     }*/




}

