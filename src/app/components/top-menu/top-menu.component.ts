import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  userName: string;

  constructor(
    private storage: StorageService,
    private route: Router
  ) {
    this.userName = this.storage.get('userName') || '';
   }

  logout() {
    this.storage.clear();
    this.route.navigate(['/login']);
  }
}
