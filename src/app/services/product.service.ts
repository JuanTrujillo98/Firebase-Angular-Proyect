import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      nombre: product.nombre,
      apellidos: product.apellidos,
      num_control: product.num_control,
      clve_mat: product.clve_mat,
      calif: product.calif
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      nombre: product.nombre,
      apellidos: product.apellidos,
      num_control: product.num_control,
      clve_mat: product.clve_mat,
      calif: product.calif
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
