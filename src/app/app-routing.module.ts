import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
const routes: Routes = [
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, pathMatch: 'full' },
	{ path: 'sign_up', component: SignupComponent },
	{ path: 'reset_password', component: ResetPasswordComponent }
	// { path: 'send/:id', component: SendComponent },
	// { path: 'messages', component: MessagesComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
