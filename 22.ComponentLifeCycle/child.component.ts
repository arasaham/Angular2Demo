import { Component, Input, ngChanges } from '@angular/core';

@Component({
  selector: 'child-selector',
  templateUrl: 'app/child.component.html'
})
export class ChildComponent implements ngChanges { 
     
  @Input() title = 'I\'m a nested component';
    
    ngOnChanges(changes) {
    console.log("changes in child:"+JSON.stringify(changes));
  }
}

