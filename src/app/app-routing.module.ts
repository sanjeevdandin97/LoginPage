import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: "login", component: LoginComponent }, { path: "", redirectTo: "login/", pathMatch: "full" },
  { path: "register", component: RegistrationPageComponent },
  { path: '**', component: LoginComponent } //Wild card route for a 404 page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
