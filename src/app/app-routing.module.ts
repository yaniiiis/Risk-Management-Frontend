import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';
import { AddRolesAndPrivilegesComponent } from './components/add-roles-and-privileges/add-roles-and-privileges.component';

const routes: Routes = [
  { path: 'adduser', component: Step1Component },
  { path: 'addrole', component: AddRolesAndPrivilegesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
