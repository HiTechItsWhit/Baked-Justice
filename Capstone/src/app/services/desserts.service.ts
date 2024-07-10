import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get<any>('assets/bake-my-cake1.json');
  }
}
