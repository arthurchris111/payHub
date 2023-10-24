import { SignupComponent } from './partials/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthenticationComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'signup', component: SignupComponent },
  //     { path: '', component: HomeComponent },
  //     { path: '***', redirectTo: '' },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
