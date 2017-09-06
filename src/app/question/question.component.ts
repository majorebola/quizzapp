import { Component, Input } from '@angular/core';
import {Question} from "../Question";
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'question',
	templateUrl: 'question.component.html'
})
export class QuestionComponent {
	@Input('qst') question: Question;

	answer;

	constructor(public alertCtrl: AlertController) {

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
			if (this.question.availableAnswers[this.answer] == this.question.correct) {
				let alert = this.alertCtrl.create({
					title: 'Good job kiddo!',
					subTitle: 'You were right!',
					buttons: ['Hurray!']
				});
				alert.present();
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
