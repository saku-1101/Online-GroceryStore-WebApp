import { Product } from './Product.model';
import { OrderDetail } from './OrderDetail.model';

export interface OrderedProduct {
  product: Product;
  order_detail: OrderDetail;
}
