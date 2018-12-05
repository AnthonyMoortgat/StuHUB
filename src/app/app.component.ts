import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { AuthService } from './authguard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StuHUB';

  cookieValue = 'UNKNOWN';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieService.set('test', 'HelloWorld');
    this.cookieValue = this.cookieService.get('test');
  }
}
