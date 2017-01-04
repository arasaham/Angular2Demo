import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
       <div [ngClass]="{bordered: isBordered}">
            Border {{ isBordered ? "ON" : "OFF" }}
        </div>
    `
})
export class AppComponent
{
   isBordered: boolean = true;
}






