import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service} from "../../app/services/service";

@Component({
  selector: 'page-questions',
  templateUrl: 'questionsList.html'
})
export class QuestionsPage {

  questions;
  constructor(private Service: Service, public navCtrl: NavController) {

  }

}
