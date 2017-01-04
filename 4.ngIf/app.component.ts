import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
        <div *ngIf = "exists">
            Hello
        </div>

        <button type="button" (click) = "toggleExists()">Toggle</button>
    `
})
export class AppComponent
{
    exists: boolean = true;
    
    toggleExists() {
        this.exists = !this.exists;
    }
}






