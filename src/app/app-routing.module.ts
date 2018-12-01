import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaboxComponent } from './ideabox/ideabox.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { DebtlistComponent } from './debtlist/debtlist.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InformationComponent } from './information/information.component';
import { AuthService } from './authguard/auth.service';
import { AuthGuard } from './authguard/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: InformationComponent, pathMatch: 'full' , canActivate:
      [AuthGuard]},
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: InformationComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'usersettings',
    component: UsersettingsComponent
  },
  {
    path: 'memberlist',
    component: MemberlistComponent
  },
  {
    path: 'debtlist',
    component: DebtlistComponent
  },
  {
    path: 'ideabox',
    component: IdeaboxComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
