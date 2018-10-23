import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaboxComponent } from './ideabox/ideabox.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { DebtlistComponent } from './debtlist/debtlist.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';


const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
