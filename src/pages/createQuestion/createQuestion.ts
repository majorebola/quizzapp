import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import { Service } from "../../app/services/service";

@Component({
	selector: 'create-question',
	templateUrl: 'createQuestion.html'
})
export class CreateQuestionPage {

	categories;
	category;
	editQuestion = false;
	question = {};
	constructor(params: NavParams, private Service: Service, public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
		if (params.data.question) {
			this.editQuestion = true;
			this.question = params.data.question;
		}
		if (params.data.category) {
			this.category = params.data.category;
			this.question = {
				categoryId: this.category.id
			};
		}
		this.getCats();
	}
	getCats(){
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
