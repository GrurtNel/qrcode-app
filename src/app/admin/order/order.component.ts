import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../customer/order/order.service';
import { Order } from '../../shared/models/order.model';
import { qrcodeTypesMap } from '../../common/constant.common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[]
  qrcodeTypesMap = qrcodeTypesMap
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(res => {
      this.orders = res
    })
  }

  onDelivery(order: Order) {
    this.orderService.deliveryOrder(order.id).subscribe(res => {
      order.activated = true
    })
  }
}
