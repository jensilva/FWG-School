import { Injectable } from '@angular/core';
import { Product, Shipping } from './product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor(private http: HttpClient) {}

  public addToCart(product: Product): void {
    this.items.push(product);
  }

  public getItems(): Product[] {
    return this.items;
  }

  public clearItems(): Product[] {
    this.items = [];
    return this.items;
  }

  public getShippingPrices(): Observable<Shipping> {
    return this.http.get<Shipping>('/assets/shipping.json');
  }
}
