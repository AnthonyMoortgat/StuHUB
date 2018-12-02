import { Component, OnInit } from '@angular/core';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {Router} from '@angular/router';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  private router: Router;

  constructor() { }

  ngOnInit() {
    this.isLogged();
  }

  isLogged() {
  }

}
