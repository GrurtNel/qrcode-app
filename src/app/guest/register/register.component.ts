import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getBase64, guidGenerator } from '../../x/utils';
import { Customer } from '../../shared/models/customer.model';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { SessionFactory } from '../../x/storage.utils';
import { userSessionKey, route } from '../../common/constant.common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer = <Customer>{}
  filePath: string = guidGenerator()
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  downloadURL: string;
  @ViewChild('logo') logo: ElementRef
  constructor(
    private httpService: HttpService,
    private fs: AngularFireStorage,
    private router:Router
  ) { }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const ref = this.fs.ref(this.filePath);
    const fileRef = this.fs.ref(this.filePath);
    const task = this.fs.upload(this.filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL$ = fileRef.getDownloadURL()
        this.downloadURL$.subscribe(downloadUrl => this.downloadURL = downloadUrl)
      })
    ).subscribe()
  }

  onRegister(f: NgForm) {
    this.customer = f.value
    this.customer.logo = this.downloadURL
    this.httpService.Post(apiURL.registerCustomer, this.customer).subscribe(res => {
      console.log(res)
      SessionFactory.setItem(userSessionKey, res)
      this.router.navigate([route.customerDashboard])
    })
  }
}
