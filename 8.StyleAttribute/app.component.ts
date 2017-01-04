import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
      <div [style.background-color]="colorName" [style.color]="color">
            Uses fixed yellow background
      </div>
    `
})
export class AppComponent
{
   colorName: string ='yellow';
    color:string='red';
}






