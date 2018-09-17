import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../auth/auth.service';
import { OrderService } from './order.service';
import { ProductService } from '../product/product.service';
import { UpdateOrderComponent } from './update-order/update-order.component';

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [CreateOrderComponent, OrderComponent, UpdateOrderComponent],
  providers: [
    AuthService,
    OrderService,
    ProductService
  ]
})
export class OrderModule { }
