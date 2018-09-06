import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest.component';
import { RegisterComponent } from './register/register.component';
import { ScanProductComponent } from './scan-product/scan-product.component';
import { ScanMarketingComponent } from './scan-marketing/scan-marketing.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'product/scan', component: ScanProductComponent },
  { path: 'marketing/scan', component: ScanMarketingComponent },
  { path: '', component: GuestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
