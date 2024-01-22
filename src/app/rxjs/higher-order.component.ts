// Observables that operate over other observables
// create or transform observable based on other observables

import { HttpClient } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { Observable, map, concatAll, switchMap } from "rxjs";

interface Character {
    name: string;
}

interface Response {
    results: Character[],
    info: any
}



@Component({
    selector: 'app-higher',
    template: `
<ng-container *ngIf="data$ | async as myData">
<ul>
  <li *ngFor="let item of myData.results">
    {{item.name}}
  </li>
</ul>
<h1 *ngIf="caracter$ | async as caracter">{{caracter.name}}</h1>
</ng-container>
`,
    styleUrls: []
})
export class HigherOrderComponent implements OnInit {
    title = 'Higher order observables';
    data$!: Observable<Response>;
    caracter$!: Observable<Character>;
    readonly API = 'https://rickandmortyapi.com/api/character';
    private http = inject(HttpClient);


    constructor() {
        this.data$ = this.http.get<Response>(this.API);

        this.caracter$ = this.http.get<Response>(this.API).pipe(
            map((response: Response) => response.results),
            map(() => Math.floor(Math.random() * 20)),
            switchMap((id: number) => this.http.get<Character>(`${this.API}/${id}`)),
            // concatAll()
            );


    }


    ngOnInit() {

    }
}
