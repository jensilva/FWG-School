export interface Product {
  name: string;
  price: number;
  description?: string;
}

export interface Shipping {
  type: string;
  price: number;
}
