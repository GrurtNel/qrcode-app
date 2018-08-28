import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService, HttpErrorService, AuthHttpService } from '../x/http/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastNotificationService } from '../x/http/toast-notification.service';
import { SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    HttpService,
    ToastNotificationService,
    SnotifyService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorService, 
      multi: true
    },
  ]
})
export class CoreModule { }
