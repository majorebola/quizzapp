import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/services/service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private Service: Service, public navCtrl: NavController) {

	}
	results;

	get() {
		console.log("Say Something");

		this.Service.randomQuestion()
			.then(data => {
				console.log(data);
				this.results = data;
			})
			.catch(error => {
				console.log("ERROR", error); // error message as string
			});
	}

}
