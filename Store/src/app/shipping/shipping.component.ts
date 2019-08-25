import { Component, OnInit } from '@angular/core';
import { Shipping } from '../product.interface';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  public shipppingCosts$: Observable<Shipping>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shipppingCosts$ = this.cartService.getShippingPrices();
  }
}
