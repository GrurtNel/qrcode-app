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
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private publicService: PublicService
  ) { }

  ngOnInit() {
    var code = ''
    this.activatedRoute.queryParams.subscribe(query => {
      // Kiểm tra khi điện thoại vào lại trình duyệt vs cùng request
      if (query.type) {
        code = prompt("Nhập mã thẻ cào để kiểm tra")
      }
      this.productService.scanProduct(query.id, query.order_id, code).subscribe(res => {
        this.product = res.product
        this.customer = res.customer
      }, err => {
        window.location.href = 'http://qrcode-united.mart24h.com/'
      })
    })
  }

}
