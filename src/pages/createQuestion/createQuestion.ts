import { Component } from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import { Service } from "../../app/services/service";

@Component({
	selector: 'create-question',
	templateUrl: 'createQuestion.html'
})
export class CreateQuestionPage {

	categories;
	question = {};
	constructor(private Service: Service, public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
		this.getCats();
	}
	getCats() {
		this.Service.getCategories().then(data => {
				console.log(data);
				this.categories = data;
			})
			.catch(error => {
				console.log("ERROR", error); // error message as string
			});
	}


	submitQuestion() {
		this.Service.postQuestion(this.question).then(data => {
			let toast = this.toastCtrl.create({
				message: 'Question successfully added',
				duration: 1500
			});
			toast.present();
			this.question = {};
		})
		.catch(error => {
			let alert = this.alertCtrl.create({
				title: 'Oh no!!!',
				subTitle: 'Something went terribly wrong!! We didn\'t create your question',
				buttons: ['I hate you fu**in developers!']
			});
			alert.present();

		});

	}
}
