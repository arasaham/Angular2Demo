import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
       <div [ngClass]="{bordered: false}">This is never bordered</div>
        <div [ngClass]="{bordered:true}">This is always bordered</div>
    `
})
export class AppComponent
{
   
}






