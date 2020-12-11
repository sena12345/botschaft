import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, SignupComponent, ResetPasswordComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		FormsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
