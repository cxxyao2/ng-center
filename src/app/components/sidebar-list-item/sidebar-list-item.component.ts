import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'crm-sidebar-list-item',
  templateUrl: './sidebar-list-item.component.html',
  styleUrls: ['./sidebar-list-item.component.scss'],
})
export class SidebarListItemComponent implements OnInit {
  constructor(public navService: NavService, public router: Router) {}

  ngOnInit() {}
  onClick() {
    if (this.navService.appDrawer?.mode !== 'side') {
      this.router.navigate(['/dash']);
      this.navService.closeNav();
    } else {
      this.router.navigate(['/dash']);
    }
  }
}
