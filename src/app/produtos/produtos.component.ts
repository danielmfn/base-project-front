import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {IProduct} from "../model/Product.interface";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  products: IProduct[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void  {
  //
  }

  getAllProducts():void {
    this.productService.getProducts().subscribe(response => {
      if (!response) {
        return;
      }
      this.products =  response;
    })
  }

}
