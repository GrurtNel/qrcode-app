import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { RegisterComponent } from './register/register.component';
import { ScanProductComponent } from './scan-product/scan-product.component';
import { ProductService } from '../customer/product/product.service';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    EditorModule
  ],
  declarations: [
    GuestComponent,
    RegisterComponent,
    ScanProductComponent
  ],
  providers: [
    ProductService
  ]
})
export class GuestModule { }
