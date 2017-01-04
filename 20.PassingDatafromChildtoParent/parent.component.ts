import {Component} from '@angular/core';
//import {ChildComponent} from './child.component';

@Component({
  selector: 'parent-selector',
  templateUrl: 'app/parent.component.html'
 // directives: [ChildComponent]
})
export class ParentComponent { 
    onNotify(message:string):void {
            alert(message);
  }
}