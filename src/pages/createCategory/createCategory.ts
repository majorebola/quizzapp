import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import { Service } from "../../app/services/service";

@Component({
	selector: 'create-category',
	templateUrl: 'createCategory.html'
})
export class CreateCategoryPage {

	quizzes;
	quiz;
	category = {};
	editCategory = false;
	constructor(params: NavParams, private Service: Service, public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
		if (params.data.category) {
			this.editCategory = true;
			this.category = params.data.category;
		}
		if (params.data.quiz) {
			this.quiz = params.data.quiz;
			this.category = {
				quizId: this.quiz.id
			};
		}
		this.getQuizzes();
	}

	getQuizzes() {
		this.Service.getQuizzes().then(data => {
			this.quizzes = data;
		})
	}

	submitCategory() {
		this.Service.postCategory(this.category).then(data => {
			let toast = this.toastCtrl.create({
				message: 'Category successfully added',
				duration: 1500
			});
			toast.present();
			this.category = {};
		})
		.catch(error => {
			let alert = this.alertCtrl.create({
				title: 'Oh no!!!',
				subTitle: 'Something went terribly wrong!! We didn\'t create your category',
				buttons: ['I hate you fu**in developers!']
			});
			alert.present();

		});

	}
}
