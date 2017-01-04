import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'parent-selector',
  templateUrl: 'app/parent.component.html',
  directives: [ChildComponent]
})
export class ParentComponent { 
    childData : string = " data passed to child";
}