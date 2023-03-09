export interface Product {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
}

export interface ProductCheckout extends Product {
  orderedCount: number;
  /** orderedCount * price */
  totalPrice: number;
}
