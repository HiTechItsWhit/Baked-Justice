import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS } from '../models/desserts';
import { Products } from '../models/dessert';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  url: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    // return this.http.get<any>('assets/bake-my-cake1.json');
    return this.http.get<Array<Products>>(this.url);
  }
}
