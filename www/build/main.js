webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateQuestionPage = (function () {
    function CreateQuestionPage(params, Service, navCtrl, alertCtrl, toastCtrl) {
        this.Service = Service;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.editQuestion = false;
        this.question = {};
        if (params.data.question) {
            this.editQuestion = true;
            this.question = params.data.question;
        }
        if (params.data.category) {
            this.category = params.data.category;
            this.question['categoryId'] = this.category.id;
        }
        this.getCats();
    }
    CreateQuestionPage.prototype.getCats = function () {
        var _this = this;
        this.Service.getCategories().then(function (data) {
            console.log(data);
            _this.categories = data;
        })
            .catch(function (error) {
            console.log("ERROR", error); // error message as string
        });
    };
    CreateQuestionPage.prototype.submitQuestion = function () {
        var _this = this;
        this.Service.postQuestion(this.question).then(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Question successfully added',
                duration: 1500
            });
            toast.present();
            _this.question = {};
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Oh no!!!',
                subTitle: 'Something went terribly wrong!! We didn\'t create your question',
                buttons: ['I hate you fu**in developers!']
            });
            alert.present();
        });
    };
    return CreateQuestionPage;
}());
CreateQuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'create-question',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\createQuestion\createQuestion.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title *ngIf="!editQuestion">Create a question</ion-title>\n		<ion-title *ngIf="editQuestion">Edit a question</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h2>Let\'s create an awesome question!</h2>\n	<ion-list>\n		<ion-item>\n			<ion-label>Category</ion-label>\n			<ion-select [(ngModel)]="question.categoryId">\n				<ion-option value="{{cat.id}}" *ngFor="let cat of categories">{{cat.name}}</ion-option>\n			</ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Question</ion-label>\n			<ion-input type="text" [(ngModel)]="question.question"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Answer</ion-label>\n			<ion-input type="text" [(ngModel)]="question.answer"></ion-input>\n		</ion-item>\n\n	</ion-list>\n	<button ion-button outline large color="default" (click)="submitQuestion()">Save question</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\createQuestion\createQuestion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CreateQuestionPage);

//# sourceMappingURL=createQuestion.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCategoryPage = (function () {
    function CreateCategoryPage(params, Service, navCtrl, alertCtrl, toastCtrl) {
        this.Service = Service;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.category = {};
        this.editCategory = false;
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
    CreateCategoryPage.prototype.getQuizzes = function () {
        var _this = this;
        this.Service.getQuizzes().then(function (data) {
            _this.quizzes = data;
        });
    };
    CreateCategoryPage.prototype.submitCategory = function () {
        var _this = this;
        this.Service.postCategory(this.category).then(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Category successfully added',
                duration: 1500
            });
            toast.present();
            _this.category = {};
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Oh no!!!',
                subTitle: 'Something went terribly wrong!! We didn\'t create your category',
                buttons: ['I hate you fu**in developers!']
            });
            alert.present();
        });
    };
    return CreateCategoryPage;
}());
CreateCategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'create-category',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\createCategory\createCategory.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title *ngIf="!editCategory">Create a Category</ion-title>\n		<ion-title *ngIf="editCategory">Edit a category</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label>Quiz</ion-label>\n			<ion-select [(ngModel)]="category.quizId">\n				<ion-option value="{{quiz.id}}" *ngFor="let quiz of quizzes">{{quiz.name}}</ion-option>\n			</ion-select>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Name</ion-label>\n			<ion-input type="text" [(ngModel)]="category.name"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Description</ion-label>\n			<ion-input type="text" [(ngModel)]="category.description"></ion-input>\n		</ion-item>\n\n	</ion-list>\n	<button ion-button outline large color="default" (click)="submitCategory()">Save category</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\createCategory\createCategory.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CreateCategoryPage);

//# sourceMappingURL=createCategory.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\home\home.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Quiz-App</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-1></ion-col>\n			<ion-col>\n				<h2>Quizzapp</h2>\n				<p><i>Quizzapp</i> is a simple but effective platform to build your own quiz and test your own knowledge of this quiz</p>\n				<div>It has\n					<ul>\n						<li>Quizzes: everyone can create his own quiz</li>\n						<li>Categories: any quiz can have a limitless number of categories</li>\n						<li>Questions: any category can have a limitless number of questions</li>\n					</ul>\n				</div>\n				<p>Question in the <i>GimmeQuestion</i> section are taken randomly. Answers are taken randomly from the same category</p>\n			</ion-col>\n			<ion-col col-1></ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(service, storage, navCtrl) {
        var _this = this;
        this.service = service;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.service.getQuizzes()
            .then(function (quizzes) {
            _this.quizzes = quizzes;
        })
            .catch(this.error);
        var q = this.storage.get('quiz');
        var c = this.storage.get('category');
        if (q) {
            this.quiz = q;
        }
        if (c) {
            this.category = c;
        }
    }
    SettingsPage.prototype.updateCategories = function () {
        var _this = this;
        this.service.getQuizCategories(this.quiz)
            .then(function (categories) {
            _this.categories = categories;
        }).catch(this.error);
    };
    SettingsPage.prototype.save = function () {
        console.log('saving', this.quiz, this.category);
        this.storage.set('quiz', this.quiz);
        this.storage.set('category', this.category);
        console.log('saved');
    };
    SettingsPage.prototype.error = function (error) {
        console.log("ERROR", error); // error message as string
    };
    SettingsPage.prototype.get = function (key) {
        return this.storage.get(key);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\settings\settings.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			Settings\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Settings page</p>\n\n	<p>Here you\'ll select the quiz (and save settings)</p>\n	<p>Log in and logout also</p>\n\n\n\n	<h3>Settings</h3>\n	<ion-item>\n		<ion-label>Select Quiz</ion-label>\n		<ion-select [(ngModel)]="quiz" (ionChange)="updateCategories()">\n			<ion-option value="{{q.id}}" *ngFor="let q of quizzes">{{q.name}}</ion-option>\n		</ion-select>\n	</ion-item>\n\n	<ion-item>\n		<ion-label>Select Categories</ion-label>\n		<ion-select [(ngModel)]="category">\n			<ion-option value="{{c.id}}" *ngFor="let c of categories">{{c.name}}</ion-option>\n		</ion-select>\n	</ion-item>\n\n	<button ion-button outline large color="secondary" (click)="save()">New Question</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_services_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createCategory_createCategory__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsPage = (function () {
    function QuestionsPage(service, navCtrl) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.getCategories();
    }
    QuestionsPage.prototype.getCategories = function () {
        var _this = this;
        this.service.getCategories().then(function (response) {
            _this.categories = response;
        });
    };
    QuestionsPage.prototype.view = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category__["a" /* CategoryPage */], { category: category });
    };
    // Service.getQuestions();
    QuestionsPage.prototype.newCategory = function (category) {
        var params = {};
        if (category) {
            params['category'] = category;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createCategory_createCategory__["a" /* CreateCategoryPage */], params);
    };
    QuestionsPage.prototype.deleteCategory = function (category) {
        var _this = this;
        this.service.deleteCategory(category).then(function (response) {
            _this.getCategories();
        });
    };
    return QuestionsPage;
}());
QuestionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-questions',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\questionsList\questionsList.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			Manage Questions\n		</ion-title>\n	</ion-navbar>\n	<ion-fab bottom right edge>\n		<button ion-fab mini (click)="newCategory()"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>\n</ion-header>\n\n<ion-content padding>\n	<p>Tap a Category to edit its questions or slide (to the left) to edit the category</p>\n	<ion-list>\n		<ion-item-sliding *ngFor="let category of categories">\n			<ion-item (click)="view(category)">\n				{{ category.name }}\n			</ion-item>\n			<ion-item-options slide="left">\n				<button ion-button (click)="newCategory(category)">\n					<ion-icon name="more"></ion-icon>\n					edit\n				</button>\n				<button ion-button color="danger" (click)="deleteCategory(category)">\n					<ion-icon name="trash"></ion-icon>\n					delete\n				</button>\n			</ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\questionsList\questionsList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], QuestionsPage);

//# sourceMappingURL=questionsList.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createQuestion_createQuestion__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryPage = (function () {
    function CategoryPage(params, service, navCtrl) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.category = params.data.category;
        this.getQuestions();
    }
    CategoryPage.prototype.getQuestions = function () {
        var _this = this;
        this.service.getCategoryQuestions(this.category.id).then(function (response) {
            _this.questions = response;
        });
    };
    CategoryPage.prototype.view = function (question) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createQuestion_createQuestion__["a" /* CreateQuestionPage */], { category: this.category, question: question });
    };
    CategoryPage.prototype.new = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createQuestion_createQuestion__["a" /* CreateQuestionPage */], { category: this.category });
    };
    CategoryPage.prototype.deleteQuestion = function (question) {
        var _this = this;
        this.service.deleteQuestion(question).then(function (response) {
            _this.getQuestions();
        });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\questionsList\category.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			Category <strong>{{category.name}}</strong>\n\n		</ion-title>\n\n	</ion-navbar>\n\n	<ion-fab bottom right edge>\n\n		<button ion-fab mini (click)="new()"><ion-icon name="add"></ion-icon></button>\n\n	</ion-fab>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item-sliding *ngFor="let question of questions">\n\n			<ion-item (click)="view(question)">\n\n				{{ question.question }}\n\n			</ion-item>\n\n			<ion-item-options slide="left">\n\n				<button ion-button color="danger" (click)="deleteQuestion(question)">\n\n					<ion-icon name="trash"></ion-icon>\n\n					delete\n\n				</button>\n\n			</ion-item-options>\n\n		</ion-item-sliding>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\questionsList\category.html"*/,
        selector: 'category'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GimmeQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GimmeQuestion = (function () {
    function GimmeQuestion(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return GimmeQuestion;
}());
GimmeQuestion = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'gimme-question',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\gimmeQuestion\gimmeQuestion.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Random Question</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<question></question>\n</ion-content>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\pages\gimmeQuestion\gimmeQuestion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], GimmeQuestion);

//# sourceMappingURL=gimmeQuestion.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_createQuestion_createQuestion__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_question_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_questionsList_questionsList__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_questionsList_category__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_gimmeQuestion_gimmeQuestion__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_createCategory_createCategory__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_createQuestion_createQuestion__["a" /* CreateQuestionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_questionsList_questionsList__["a" /* QuestionsPage */],
            __WEBPACK_IMPORTED_MODULE_10__question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_gimmeQuestion_gimmeQuestion__["a" /* GimmeQuestion */],
            __WEBPACK_IMPORTED_MODULE_16__pages_createCategory_createCategory__["a" /* CreateCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_questionsList_category__["a" /* CategoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_questionsList_questionsList__["a" /* QuestionsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_createQuestion_createQuestion__["a" /* CreateQuestionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_createCategory_createCategory__["a" /* CreateCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_gimmeQuestion_gimmeQuestion__["a" /* GimmeQuestion */],
            __WEBPACK_IMPORTED_MODULE_14__pages_questionsList_category__["a" /* CategoryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_service__["a" /* Service */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_questionsList_questionsList__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gimmeQuestion_gimmeQuestion__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Take a Question', component: __WEBPACK_IMPORTED_MODULE_7__pages_gimmeQuestion_gimmeQuestion__["a" /* GimmeQuestion */] },
            { title: 'Manage', component: __WEBPACK_IMPORTED_MODULE_6__pages_questionsList_questionsList__["a" /* QuestionsPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\app\app.html"*/'<ion-menu [content]="content">\n	<ion-header>\n		<ion-toolbar>\n			<ion-title>Menu</ion-title>\n		</ion-toolbar>\n	</ion-header>\n\n	<ion-content>\n		<ion-list>\n			<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n				{{p.title}}\n			</button>\n		</ion-list>\n	</ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Question__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionComponent = (function () {
    function QuestionComponent(alertCtrl, Service) {
        this.alertCtrl = alertCtrl;
        this.Service = Service;
        this.showAnswers = false;
        this.Service = Service;
        this.reset();
    }
    QuestionComponent.prototype.reset = function () {
        this.answer = null;
        this.question = null;
        this.showAnswers = false;
    };
    QuestionComponent.prototype.get = function () {
        var _this = this;
        this.Service.randomQuestion()
            .then(function (data) {
            console.log(data);
            _this.question = data;
        })
            .catch(function (error) {
            console.log("ERROR", error); // error message as string
        });
    };
    QuestionComponent.prototype.verify = function () {
        if (!this.answer) {
            var alert_1 = this.alertCtrl.create({
                title: 'U kiddin?!',
                subTitle: 'Answer!! NOW!',
                buttons: ['OK, sorry']
            });
            alert_1.present();
        }
        else {
            if (this.question.availableAnswers[this.answer] === this.question.correct) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Good job kiddo!',
                    subTitle: 'You were right!',
                    buttons: ['Hurray!']
                });
                alert_2.present();
                this.reset();
            }
            else {
                var alert_3 = this.alertCtrl.create({
                    title: 'That was wrong!',
                    subTitle: 'You can do better than this',
                    buttons: ['Oww... I\'ll practice more']
                });
                alert_3.present();
            }
        }
    };
    return QuestionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('qst'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__Question__["a" /* Question */])
], QuestionComponent.prototype, "question", void 0);
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'question',template:/*ion-inline-start:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\app\question\question.component.html"*/'<div text-center>\n\n	<button *ngIf="!question" ion-button large color="default" (click)="get()">Gimme a Question</button>\n\n</div>\n\n\n\n\n\n\n\n<h5 *ngIf="!question">Tap to get a new random question</h5>\n\n<ion-card *ngIf="question">\n\n	<ion-card-header>\n\n		Question #{{question.id}}\n\n	</ion-card-header>\n\n\n\n	<ion-card-content>\n\n		<p class="question">{{question.question}}</p>\n\n\n\n		<button *ngIf="!showAnswers" ion-button outline color="primary" (click)="showAnswers = true">Show Answers</button>\n\n\n\n		<div *ngIf="showAnswers">\n\n			<ion-list radio-group [(ngModel)]="answer">\n\n				<ion-list-header>\n\n					Available Answers\n\n				</ion-list-header>\n\n\n\n				<ion-item *ngFor="let answer of question.availableAnswers; let i = index">\n\n					<ion-label>{{answer}}</ion-label>\n\n					<ion-radio value="{{i}}"></ion-radio>\n\n				</ion-item>\n\n			</ion-list>\n\n			<div text-right>\n\n				<button ion-button outline color="secondary" (click)="verify()">Check Answer</button>\n\n			</div>\n\n		</div>\n\n	</ion-card-content>\n\n\n\n</ion-card>\n\n'/*ion-inline-end:"C:\Users\edoar\Documents\Personal\Projects\quiz-app\src\app\question\question.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_service__["a" /* Service */]])
], QuestionComponent);

//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=Question.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Service = (function () {
    // baseUrl = "/api/";
    function Service(http) {
        this.http = http;
        // baseUrl = "http://d2w-quiz.herokuapp.com/api/";
        this.baseUrl = "http://52.14.62.243:8000/api/";
    }
    Service.prototype.getCategories = function () {
        return this.http.get(this.baseUrl + 'categories').toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.getCategoryQuestions = function (categoryId) {
        return this.http.get(this.baseUrl + 'categories/' + categoryId + '/questions').toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.getQuizzes = function () {
        return this.http.get(this.baseUrl + 'quiz').toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.getQuizCategories = function (quizId) {
        return this.http.get(this.baseUrl + 'quiz/' + quizId + '/categories').toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.getQuestions = function () {
        return this.http.get(this.baseUrl + 'questions').toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.randomQuestion = function () {
        return this.http.get(this.baseUrl + 'questions/random/1').toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.postQuestion = function (question) {
        return this.http.post(this.baseUrl + 'questions', question).toPromise()
            .then(function (response) {
            return true;
        }).catch(function (response) { return false; });
    };
    Service.prototype.postCategory = function (category) {
        return this.http.post(this.baseUrl + 'categories', category).toPromise()
            .then(function (response) {
            return true;
        }).catch(function (response) { return false; });
    };
    Service.prototype.deleteCategory = function (category) {
        return this.http.delete(this.baseUrl + 'categories/' + category.id).toPromise()
            .then(function (response) {
            return true;
        }).catch(function (response) { return false; });
    };
    Service.prototype.deleteQuestion = function (question) {
        return this.http.delete(this.baseUrl + 'questions/' + question.id).toPromise()
            .then(function (response) {
            return true;
        }).catch(function (response) { return false; });
    };
    Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map