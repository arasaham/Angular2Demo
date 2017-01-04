import {Component} from '@angular/core';
//import {LengthPipe} from './length.pipe';

@Component({
    selector: 'my-app',
    template: '<div><p>{{ message | length:true }}</p></div>'
   // pipes: [LengthPipe]
})
export class AppComponent {
  message: string = 'Angular2';
}

