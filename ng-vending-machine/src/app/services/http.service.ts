import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { };


  getItemList() {
    return this.http.get('http://localhost:9898/api/get')
  }

  getCartList() {
    return this.http.get('http://localhost:9898/cart/get')
  }

}