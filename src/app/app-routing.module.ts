import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserGuard } from './adduser.guard';
import { AddRolesAndPrivilegesComponent } from './components/add-roles-and-privileges/add-roles-and-privileges.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomeComponent } from './components/home/home.component';
import { PortefeuilDirectComponent } from './components/portefeuil-direct/portefeuil-direct.component';
import { PortefeuilIndirectComponent } from './components/portefeuil-indirect/portefeuil-indirect.component';
import { PortefeuilComponent } from './components/portefeuil/portefeuil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adduser', component: AddUserComponent, canActivate: [AdduserGuard] },
  { path: 'addrole', component: AddRolesAndPrivilegesComponent },
  { path: 'portefeuil-indirect', component: PortefeuilIndirectComponent },
  { path: 'portefeuil-direct', component: PortefeuilDirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
