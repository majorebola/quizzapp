import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { Service } from './services/service';

import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { CreateQuestionPage } from "../pages/createQuestion/createQuestion";

import { QuestionComponent } from './question/question.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestionsPage } from "../pages/questionsList/questionsList";
import { CategoryPage } from "../pages/questionsList/category";
import {GimmeQuestion} from "../pages/gimmeQuestion/gimmeQuestion";
import {CreateCategoryPage} from "../pages/createCategory/createCategory";

@NgModule({
	declarations: [
		MyApp,
		SettingsPage,
		HomePage,
		CreateQuestionPage,
		QuestionsPage,
		QuestionComponent,
		GimmeQuestion,
		CreateCategoryPage,
		CategoryPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		SettingsPage,
		HomePage,
		QuestionsPage,
		CreateQuestionPage,
		CreateCategoryPage,
		GimmeQuestion,
		CategoryPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Service,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
