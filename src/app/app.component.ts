import { Component, OnInit } from '@angular/core';
import observableExample from './rxjs/observable';
import operatorExamples from './rxjs/operators';
import tapOperatorExample from './rxjs/tap.operator';
import delayOperatorExample from './rxjs/delay.operator';
import mapOperatorExample from './rxjs/map.operator';
import switchMapOperator from './rxjs/switchmap.operator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs_learning';


  constructor(){
    // observableExample();
    // operatorExamples();
    // tapOperatorExample();
    // delayOperatorExample();
    // mapOperatorExample();
    // switchMapOperator();    
  }


  ngOnInit(){

  }


}
