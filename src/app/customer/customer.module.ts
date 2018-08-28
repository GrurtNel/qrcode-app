import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpService } from '../x/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ],
  declarations: [CustomerComponent, ProfileComponent],
  providers: [HttpService]
})
export class CustomerModule { }
