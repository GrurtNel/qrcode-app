import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getBase64 } from '../../x/utils';
import { Customer } from '../../shared/models/customer.model';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer = <Customer>{}
  @ViewChild('logo') logo: ElementRef
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  onRegister(f: NgForm) {
    this.customer = f.value
    if (this.logo.nativeElement.files[0]) {
      getBase64(this.logo.nativeElement.files[0]).then(res => {
        this.customer.logo = <string>res
        console.log(this.customer)
        this.httpService.Post(apiURL.registerCustomer, this.customer).subscribe(res=>console.log(res))
      })
    }
  }
}
