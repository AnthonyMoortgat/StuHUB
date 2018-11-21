import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StuHUBCli';

  constructor(private _cookieService: CookieService) {}

  getCookie(key: string) {
    return this._cookieService.get(key);
  }
}
