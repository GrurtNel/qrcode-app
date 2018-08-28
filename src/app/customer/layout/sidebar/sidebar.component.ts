import { Component, OnInit } from '@angular/core';
import { SessionFactory } from '../../../x/storage.utils';
import { userSessionKey } from '../../../common/constant.common';

@Component({
  selector: 'customer-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userInfo: any
  constructor() { }

  ngOnInit() {
    this.userInfo = SessionFactory.getItem(userSessionKey).user_info
  }

}
