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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: InformationComponent, pathMatch: 'full' , canActivate: [AuthGuard]
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'usersettings', component: UsersettingsComponent, pathMatch: 'full' , canActivate: [AuthGuard]
  },
  {
    path: 'memberlist', component: MemberlistComponent, pathMatch: 'full' , canActivate: [AuthGuard]
  },
  {
    path: 'debtlist', component: DebtlistComponent, pathMatch: 'full' , canActivate: [AuthGuard]
  },
  {
    path: 'ideabox', component: IdeaboxComponent, pathMatch: 'full' , canActivate: [AuthGuard]
  },
  {
    path: 'inscription', component: InscriptionComponent, pathMatch: 'full' , canActivate: [AuthGuard]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
