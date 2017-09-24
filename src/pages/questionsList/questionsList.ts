import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Service} from "../../app/services/service";
import {CategoryPage} from "./category";
import {CreateCategoryPage} from "../createCategory/createCategory";

@Component({
	selector: 'page-questions',
	templateUrl: 'questionsList.html'
})
export class QuestionsPage {

	questions;
	categories;
	constructor(private service: Service, public navCtrl: NavController) {
		this.getCategories();
	}

	getCategories() {
		this.service.getCategories().then((response) => {
			this.categories = response;
		})
	}

	view(category) {
		this.navCtrl.push(CategoryPage, { category: category });
	}
	// Service.getQuestions();

	newCategory(category) {
		let params = {};
		if(category) {
			params['category'] = category;
		}
		this.navCtrl.push(CreateCategoryPage, params);
	}

	deleteCategory(category) {
		this.service.deleteCategory(category).then((response) => {
			this.getCategories();
		});
	}
}
