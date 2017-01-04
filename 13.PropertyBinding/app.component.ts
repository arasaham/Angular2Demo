import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
      <img [src]='imgUrl' width=200 height=200>
    `
})
export class AppComponent
{
    imgUrl : string = 'app/logo.jpg';
}






