import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
      <p style = "padding: 1rem"
            [ngStyle]="{
                color:'red',
                'font-weight':'bold',
                borderBottom: borderStyle
            }">
                Demo for attribute directive ngStyle
        </p>

    `
})
export class AppComponent
{
    borderStyle: string = '1px solid black';
}






