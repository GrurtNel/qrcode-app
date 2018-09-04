import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order.model';
import { OrderService } from './order.service';
import { qrcodeTypesMap } from '../../common/constant.common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = []
  qrcodeTypesMap = qrcodeTypesMap
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(res => {
      if (res) {
        this.orders = res
      }
    })
  }

}
