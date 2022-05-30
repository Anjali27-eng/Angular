import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './my-component/login/login.component';

import { RegistrationComponent } from './my-
component/registration/registration.component';

const routes: Routes = [
{component:RegistrationComponent, path:'registration'},
{component:LoginComponent , path:'login'}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
