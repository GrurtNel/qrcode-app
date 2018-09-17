import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/auth.service';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerService } from './customer/customer.service';
import { OrderService } from '../customer/order/order.service';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    CustomerComponent,
    OrderComponent,
    UpdateOrderComponent
  ],
  providers: [
    AuthService,
    CustomerService,
    OrderService
  ]
})
export class AdminModule { }
