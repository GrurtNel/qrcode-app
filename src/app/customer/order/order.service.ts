import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Injectable()
export class OrderService {
    constructor(
        private httpService: HttpService
    ) { }

    createOrder(order) {
        return this.httpService.Post(apiURL.createOrder, order)
    }

    getOrders() {
        return this.httpService.Get(apiURL.getOrders)
    }
}