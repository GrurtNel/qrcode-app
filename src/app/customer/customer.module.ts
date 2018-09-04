import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpService } from '../x/http/http.service';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ],
  declarations: [CustomerComponent, ProfileComponent, HeaderComponent, SidebarComponent, DashboardComponent],
  providers: [HttpService, AuthService]
})
export class CustomerModule { }
