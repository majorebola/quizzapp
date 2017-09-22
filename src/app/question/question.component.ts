import { Component, Input } from '@angular/core';
import {Question} from "../Question";
import { AlertController } from 'ionic-angular';
import {Service} from "../services/service";

@Component({
	selector: 'question',
	templateUrl: 'question.component.html'
})
export class QuestionComponent {
	@Input('qst') question: Question;

	answer;
	showAnswers = false;
	results;

	constructor(public alertCtrl: AlertController, private Service:Service) {
		this.Service = Service;
		this.reset();
	}

	reset () {
		this.answer = null;
		this.question = null;
		this.showAnswers = false;
	}


	get() {
		this.Service.randomQuestion()
			.then(data => {
				console.log(data);
				this.question = data;
			})
			.catch(error => {
				console.log("ERROR", error); // error message as string
			});
	}


	verify() {
		if(!this.answer) {
			let alert = this.alertCtrl.create({
				title: 'U kiddin?!',
				subTitle: 'Answer!! NOW!',
				buttons: ['OK, sorry']
			});
			alert.present();
		} else {
			if (this.question.availableAnswers[this.answer] === this.question.correct) {
				let alert = this.alertCtrl.create({
					title: 'Good job kiddo!',
					subTitle: 'You were right!',
					buttons: ['Hurray!']
				});
				alert.present();
				this.reset();
			} else {
				let alert = this.alertCtrl.create({
					title: 'That was wrong!',
					subTitle: 'You can do better than this',
					buttons: ['Oww... I\'ll practice more']
				});
				alert.present();
			}
		}

	}

}
