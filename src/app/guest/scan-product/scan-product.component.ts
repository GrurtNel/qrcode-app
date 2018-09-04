import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../customer/product/product.service';
import { Product } from '../../shared/models/product.model';
import { Customer } from '../../shared/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalFactory } from '../../x/storage.utils';

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
    private router: Router
  ) { }

  ngOnInit() {
    var code = ''
    this.activatedRoute.queryParams.subscribe(query => {
      // Kiểm tra khi điện thoại vào lại trình duyệt vs cùng request
      if (query.type) {
        code = prompt("Nhập mã thẻ cào để kiểm tra")
      }
      this.productService.scanProduct(query.id, code).subscribe(res => {
        this.product = res.product
        this.customer = res.customer
      }, err => {
        this.router.navigate(['/'])
      })
    })
  }

}
