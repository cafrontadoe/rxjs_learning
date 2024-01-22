import { Component, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http"


interface Post {
    userId: number;
    id: number;
    title: number;
    body: number;
}

@Component({
    selector: 'app-cold',
    template: `
    <h1 *ngIf="data$ | async as myData">{{myData.title}}<h1>
    <h1 *ngIf="data$ | async as myData">{{myData.id}}<h1>
    `,
    styleUrls: []
  })
  export class AppCold implements OnInit {
    title = 'cold';
    data$: Observable<Post>;
    private http = inject(HttpClient);

  
    constructor(){
    this.data$ = this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/1");
    
    }
  
  
    ngOnInit(){
      
    }
}