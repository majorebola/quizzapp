import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Service } from '../../app/services/service';


@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {

	quizzes;
	categories;
	quiz;
	category;
	constructor(private service: Service, private storage: Storage, public navCtrl: NavController) {
		this.service.getQuizzes()
			.then((quizzes) => {
					this.quizzes = quizzes
				})
			.catch(this.error);

		let q = this.storage.get('quiz');
		let c = this.storage.get('category');
		if(q) {
			this.quiz = q;
		}
		if(c) {
			this.category = c;
		}
	}
	updateCategories () {
		this.service.getQuizCategories(this.quiz)
			.then((categories) => {
				this.categories = categories
			}).catch(this.error);
	}

	save() {
		console.log('saving', this.quiz, this.category);
		this.storage.set('quiz', this.quiz);
		this.storage.set('category', this.category);
		console.log('saved');
	}

	error (error) {
		console.log("ERROR", error); // error message as string
	}

	get (key) {
		return this.storage.get(key);
	}
}
