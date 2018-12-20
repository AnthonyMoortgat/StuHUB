import { Component, OnInit } from '@angular/core';
import { activateRoutes } from '@angular/router/src/operators/activate_routes';
import { Router } from '@angular/router';
import { AuthService } from '../authguard/auth.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})

export class InformationComponent implements OnInit {
  private router: Router;
  firstname = sessionStorage.getItem('Firstname');
  lastname = sessionStorage.getItem('Lastname');
  userID = sessionStorage.getItem('Orgname');
  text = '<script>\n' +
    '        function addHtmlStuHUB()\n' +
    '        {\n' +
    '          console.log(\'test\');\n' +
    '\n' +
    '          var xmlhttp = new XMLHttpRequest();\n' +
    '          xmlhttp.onreadystatechange = function()\n' +
    '          {\n' +
    '            if (this.readyState == 4 && this.status == 200) {\n' +
    '              document.getElementById("generateHtmlDivStuHUB").innerHTML = this.responseText;\n' +
    '            }\n' +
    '          };\n' +
    '\n' +
    '          xmlhttp.open("GET", "generateHTML.php?h=' + this.userID + '", true);\n' +
    '          xmlhttp.send();\n' +
    '        }\n' +
    '      </script>'.toString();

  constructor(private auth: AuthService ) {}

  ngOnInit() {
    this.isLogged();
  }

  isLogged() {
  }

}
