import { Injectable, inject } from '@angular/core';
import { IProduct } from './IProduct';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)


  constructor() { }

  getProducts() {
    return this.http.get<IProduct[]>(API_URL);
  }

}
