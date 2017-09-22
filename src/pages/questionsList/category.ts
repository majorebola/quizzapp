import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Service} from "../../app/services/service";
import {CreateQuestionPage} from "../createQuestion/createQuestion";
@Component({
	templateUrl: 'category.html',
	selector: 'category'
})
export class CategoryPage {
	category;
	questions;
	constructor(params: NavParams, private service: Service, public navCtrl: NavController) {
		this.category = params.data.category;
		this.service.getCategoryQuestions(this.category.id).then((response) => {
			this.questions = response;
		})

	}

	view(question) {
		this.navCtrl.push(CreateQuestionPage, { category: this.category, question: question });
	}

	new() {
		this.navCtrl.push(CreateQuestionPage, { category: this.category});
	}

}
