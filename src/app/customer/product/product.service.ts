import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Injectable()
export class ProductService {
    constructor(
        private httpService: HttpService
    ) { }

    createProduct(product) {
        return this.httpService.Post(apiURL.createProduct, product)
    }

    getProducts() {
        return this.httpService.Get(apiURL.getProducts)
    }
}