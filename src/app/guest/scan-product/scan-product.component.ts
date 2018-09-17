import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../customer/product/product.service';
import { Product } from '../../shared/models/product.model';
import { Customer } from '../../shared/models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../customer/order/order.service';
import { PublicService } from '../../shared/services/public.service';

@Component({
  selector: 'app-scan-product',
  templateUrl: './scan-product.component.html',
  styleUrls: ['./scan-product.component.css']
})
export class ScanProductComponent implements OnInit {
  product = <Product>{}
  customer = <Customer>{}
  code = ''
  productID = ''
  orderID = ''
  isVerify = false
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private publicService: PublicService
  ) { }

  ngOnInit() {
    var code = ''
    this.activatedRoute.queryParams.subscribe(query => {
      // Kiểm tra khi điện thoại vào lại trình duyệt vs cùng request
      this.productID = query.id
      this.orderID = query.order_id
    })
  }

  verifyProduct(code: string) {
    this.productService.scanProduct(this.productID, this.orderID, code).subscribe(res => {
      this.product = res.product
      this.customer = res.customer
      this.isVerify = true
    }, err => {
      // window.location.href = 'http://qrcode-united.mart24h.com/'
    })
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords)
        alert(position.coords.latitude)
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}

