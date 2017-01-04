import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
        <ul>
            <li *ngFor = "let course of courses"> {{ course.name }} </li>
        </ul>
    `
})
export class AppComponent
{
    courses: any[] = [
        {id : 1, name : "TypeScript"},
        {id : 2, name : "Angular 2"},
        {id : 3, name : "Node JS"}
    ];
         
}






