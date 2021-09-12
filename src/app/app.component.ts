import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-project-front';

  constructor(private router: Router) {
  }

  goToProducts() {
    this.router.navigateByUrl('/products',{skipLocationChange: true});
  }
}
