import { Product } from './Product.model';
import { OrderDetail } from './OrderDetail.model';

export interface OrderedProduct extends Product, OrderDetail {}
