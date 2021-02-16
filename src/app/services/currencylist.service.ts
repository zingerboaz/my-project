import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencylistService {


  baseUrl="https://api.coingecko.com/api/v3/coins";
  currencys: any;
  constructor(private httpClient:HttpClient ) { }



  get():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`);
  }

  

}
