import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
       <h4>
            Current choice is {{ value }}
        </h4>

    <div [ngSwitch]="value">
        <p *ngSwitchCase="1">First Choice</p>
        <p *ngSwitchCase="2">Second Choice</p>
        <p *ngSwitchCase="3">Third Choice</p>
        <p *ngSwitchCase="2">Second Choice Again</p>
        <p *ngSwitchDefault>Default Choice</p>
    </div>

    <div>
        <button (click) = "nextChoice()">
                Next Choice
        </button>
    </div>
    `
})
export class AppComponent
{
    value: number = 0;
    
    nextChoice() {
        this.value++;
    }
}






