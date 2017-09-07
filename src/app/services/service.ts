import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Question } from '../Question';
import { Category } from "../Category";
import {Quiz} from "../Quiz";

@Injectable()
export class Service {
	baseUrl = "http://d2w-quiz.herokuapp.com/api/";
	// baseUrl = "/api/";

	constructor(private http: Http) {
	}

	getCategories(): Promise<Category[]> {
		return this.http.get(this.baseUrl + 'categories').toPromise()
			.then(function(response) {
				return response.json() as Category[];
			})
			.catch(this.handleError);
	}

	getQuizzes(): Promise<Quiz[]> {
		return this.http.get(this.baseUrl + 'quiz').toPromise()
			.then(function(response) {
				return response.json() as Quiz[];
			})
			.catch(this.handleError);
	}

	getQuizCategories(quizId): Promise<Category> {
		return this.http.get(this.baseUrl + 'quiz/'+ quizId + '/categories').toPromise()
			.then(function(response) {
				return response.json() as Category[];
			})
			.catch(this.handleError);
	}

	getQuestions(): Promise<Question[]> {
		return this.http.get(this.baseUrl + 'questions').toPromise()
			.then(function(response) {
				return response.json() as Question[];
			})
			.catch(this.handleError);
	}

	randomQuestion(): Promise<Question> {
		return this.http.get(this.baseUrl + 'questions/random/1').toPromise()
			.then(function(response) {
				return response.json() as Question;
			})
			.catch(this.handleError);
	}

	postQuestion(question): Promise<Boolean> {
		return this.http.post(this.baseUrl + 'questions', question).toPromise()
			.then(response => {
				return true;
			}).catch(response => { return false});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
