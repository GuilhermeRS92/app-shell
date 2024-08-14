import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName: string = 'Desconhecido'

  constructor(
    private storage: StorageService
  ) {
    this.userName = storage.get('userName') || 'Desconhecido'
  }
}
