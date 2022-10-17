import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { RegisterStepsService } from './services/register-steps.service';
import { FunctionAndStructureComponent } from './components/function-and-structure/function-and-structure.component';
import { AddRolesAndPrivilegesComponent } from './components/add-roles-and-privileges/add-roles-and-privileges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputComponent } from './components/shared-components/input/input.component';
import { AutoCompletInputComponent } from './components/shared-components/auto-complet-input/auto-complet-input.component';
import { PasswordInputComponent } from './components/shared-components/password-input/password-input.component';
import { LevelsAutoCompleteComponent } from './components/shared-components/levels-auto-complete/levels-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    Step1Component,
    Step2Component,
    FunctionAndStructureComponent,
    AddRolesAndPrivilegesComponent,
    FooterComponent,
    NavbarComponent,
    InputComponent,
    AutoCompletInputComponent,
    PasswordInputComponent,
    LevelsAutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
