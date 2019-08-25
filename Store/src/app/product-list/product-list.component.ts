import { Component } from '@angular/core';
import { products } from '../products';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products: Product[] = products;

  public share(): void {
    window.alert('The product has been shared');
  }

  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}
