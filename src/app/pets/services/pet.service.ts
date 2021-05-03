import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/products/';

  createProduct(model: Pet) {
    return this.http.post(this.baseUrl, model);
  }

  getProducts(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl);
  }

  getSingleProduct(productId: string): Observable<Pet> {
    return this.http.get<Pet>(this.baseUrl + productId);
  }

  editProduct(model: Pet): Observable<Pet> {
    return this.http.put<Pet>(this.baseUrl + model.id, model);
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.baseUrl + productId);
  }
}
