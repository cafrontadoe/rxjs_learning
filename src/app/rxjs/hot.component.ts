import { Component, OnInit, inject } from "@angular/core";
import { Observable, Subscription, interval } from "rxjs";




@Component({
    selector: 'app-hot',
    template: `
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <p>{{counter}}</p>
    `,
    styleUrls: []
  })
  export class AppHot implements OnInit {

    private suscriber!: Subscription;
    counter = 0;

    constructor(){
    
    }
  
  
    ngOnInit(){
      this.start();
    }

    start() {
      this.suscriber = interval(1000).subscribe((value) =>{
        this.counter = value;
      });
    }

    stop(){
      console.log("checka");
      this.suscriber.unsubscribe();
    }
}