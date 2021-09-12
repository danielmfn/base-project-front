import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../model/Product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8081/api/v1/product';

  constructor(private http: HttpClient) {
  }

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl);
  }

}
