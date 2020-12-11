import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class AuthservicesService {
	constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

	public login(data: FormControl) {
		let body = data.value;

		this.auth
			.sendPasswordResetEmail(body.email)
			.then((res) => {
				console.log(res);
			})
			.catch((er) => {
				console.log(er.message);
			});

		// this.auth
		// 	.createUserWithEmailAndPassword(body.email, body.password)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((er) => {
		// 		console.log(er.message);
		// 	});

		// this.auth
		// 	.signInWithEmailAndPassword(body.email, body.password)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((er) => {
		// 		console.log(er.message);
		// 	});

		// this.firestore
		// 	.collection('users')
		// 	.doc()
		// 	.set({ name: 'Elvis', age: 21, role: 'admin' })
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((er) => {
		// 		console.log(er);
		// 	});
	}
}
