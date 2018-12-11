import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { IdeaboxComponent } from './ideabox/ideabox.component';
import { DebtlistComponent } from './debtlist/debtlist.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { InscriptionOptionsComponent } from './inscription/inscription-options/inscription-options.component';
import { InformationComponent } from './information/information.component';
import { RegisterComponent } from './register/register.component';
import { IdeaboxOptionComponent } from './ideabox/ideabox-option/ideabox-option.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MemberlistComponent,
    IdeaboxComponent,
    DebtlistComponent,
    UsersettingsComponent,
    InscriptionComponent,
    InscriptionComponent,
    LoginComponent,
    InscriptionOptionsComponent,
    InformationComponent,
    RegisterComponent,
    IdeaboxOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
