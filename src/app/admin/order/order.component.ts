import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../customer/order/order.service';
import { Order } from '../../shared/models/order.model';
import { qrcodeTypesMap } from '../../common/constant.common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../../common/api.common';
import { AuthService } from '../../x/http/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[]
  qrcodeTypesMap = qrcodeTypesMap
  selectedOrder: Order
  quantity: number
  endpoint = 'http://localhost:4200/#/marketing/scan?order_id='
  constructor(
    private orderService: OrderService,
    private http: HttpClient,
    private authService: AuthService
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

  onGenerateCSV() {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('responseType', 'blob');
    // this.http.get(`${apiURL.generateCSV}?order_id=${this.selectedOrder.id}&quantity=${this.quantity}`, {
    //   headers: headers
    // }).subscribe()
    window.open(`${apiURL.generateCSV}?order_id=${this.selectedOrder.id}&quantity=${this.quantity}&access_token=${this.authService.getToken()}`, '_blank')
  }

}
