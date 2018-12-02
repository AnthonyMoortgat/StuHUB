import { Component, OnInit } from '@angular/core';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {Router} from '@angular/router';
import {AuthService} from '../authguard/auth.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  private router: Router;
  firstname = localStorage.getItem('Firstname');
  lastname = localStorage.getItem('Lastname');

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged();
  }

  isLogged() {
  }

}
