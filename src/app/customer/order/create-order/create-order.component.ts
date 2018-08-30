import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { qrcodeTypes, route } from '../../../common/constant.common';
import { OrderService } from '../order.service';
import { AuthService } from '../../../x/http/auth.service';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order = {
    name: '',
    type: qrcodeTypes[0].type,
    customer_id: '',
    quantity: 1000,
    product_id: '',
    url: '',
  }
  types = qrcodeTypes
  productSelect = []
  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private notify: ToastNotificationService
  ) { }

  ngOnInit() {
    this.order.customer_id = this.authService.getUserID()
    this.productService.getProducts().subscribe(res => {
      if (res) {
        this.productSelect = res
        this.order.product_id = res[0].id
      }
    })
  }

  onRegister() {
    this.orderService.createOrder(this.order).subscribe(newOrder => {
      this.notify.success('Tạo đơn hàng thành công!')
      this.router.navigate([route.rootOrder])
    })
  }
}
