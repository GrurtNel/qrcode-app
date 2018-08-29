import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [ProductComponent, CreateProductComponent]
})
export class ProductModule { }
