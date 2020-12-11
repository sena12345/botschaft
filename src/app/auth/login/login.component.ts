import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthservicesService } from './../service/authservices.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor(private auth: AuthservicesService) {}

	ngOnInit(): void {}

	public login(loginData: FormControl) {
		this.auth.login(loginData);
	}
}
