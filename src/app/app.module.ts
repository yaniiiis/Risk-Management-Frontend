import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { AddRolesAndPrivilegesComponent } from './components/add-roles-and-privileges/add-roles-and-privileges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { InputComponent } from './components/shared-components/input/input.component';
import { AutoCompletInputComponent } from './components/shared-components/auto-complet-input/auto-complet-input.component';
import { PasswordInputComponent } from './components/shared-components/password-input/password-input.component';
import { LevelsAutoCompleteComponent } from './components/shared-components/levels-auto-complete/levels-auto-complete.component';
import { ButtonComponent } from './components/shared-components/button/button.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { PortefeuilComponent } from './components/portefeuil/portefeuil.component';
import { EngagementsIndirectsComponent } from './components/portefeuil/engagements-indirects/engagements-indirects.component';
import { PortefeuilIndirectComponent } from './components/portefeuil-indirect/portefeuil-indirect.component';
import { EngagementsComponent } from './components/portefeuil-indirect/engagements/engagements.component';
import { EvolutionComponent } from './components/portefeuil-indirect/evolution/evolution.component';
import { PortefeuilDirectComponent } from './components/portefeuil-direct/portefeuil-direct.component';
import { CreditNetComponent } from './components/portefeuil-direct/credit-net/credit-net.component';
import { ParTypeEngagementComponent } from './components/portefeuil-direct/par-type-engagement/par-type-engagement.component';
import { EvolutionDirectComponent } from './components/portefeuil-direct/evolution-direct/evolution-direct.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRolesAndPrivilegesComponent,
    FooterComponent,
    NavbarComponent,
    InputComponent,
    AutoCompletInputComponent,
    PasswordInputComponent,
    LevelsAutoCompleteComponent,
    ButtonComponent,
    AddUserComponent,
    HomeComponent,
    PortefeuilComponent,
    EngagementsIndirectsComponent,
    PortefeuilIndirectComponent,
    EngagementsComponent,
    EvolutionComponent,
    PortefeuilDirectComponent,
    CreditNetComponent,
    ParTypeEngagementComponent,
    EvolutionDirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
