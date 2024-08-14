import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teste Front End - Teddy';

  constructor(
    public router: Router,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

}
