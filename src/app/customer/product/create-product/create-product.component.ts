import { Component, OnInit } from '@angular/core';
import { guidGenerator } from '../../../x/utils';
import { HttpService } from '../../../x/http/http.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  imagesPath = [guidGenerator(), guidGenerator(), guidGenerator(), guidGenerator()]
  downloadURLs = ['', '', '', '', ''];
  imageIndex = -1
  uploadedImageIndex = -1
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;

  constructor(
    private httpService: HttpService,
    private fs: AngularFireStorage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  uploadFile(event) {
    console.log(this.imageIndex)
    const file = event.target.files[0];
    const filePath = this.imagesPath[this.imageIndex]
    const fileRef = this.fs.ref(filePath);
    const task = this.fs.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL$ = fileRef.getDownloadURL()
        this.downloadURL$.subscribe(downloadUrl => {
          this.downloadURLs[this.imageIndex] = downloadUrl
        })
      })
    ).subscribe()
  }
}
