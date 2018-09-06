import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicService } from '../../shared/services/public.service';

@Component({
  selector: 'app-scan-marketing',
  templateUrl: './scan-marketing.component.html',
  styleUrls: ['./scan-marketing.component.css']
})
export class ScanMarketingComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private publicService: PublicService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      const url = param.url
      const orderID = param.order_id
      this.publicService.scanMarketing(orderID).subscribe(res=>{
        console.log(res)
      })      
      // setTimeout(() => {
      //   window.location.href = url
      // }, 5000);
    })
  }

}
