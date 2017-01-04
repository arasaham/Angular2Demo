import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
      <table border=1>
        <tr>
            <td [attr.colspan]="1+1"> First </td>
            <td>Second</td>
        </tr>
        <tr>
            <td>Third</td>
            <td>Fourth</td>
            <td>Fifth</td>
        </tr>
    </table>
    `
})
export class AppComponent
{
    
}






