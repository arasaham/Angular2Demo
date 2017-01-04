import {Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy} from '@angular/core';

@Component({
    selector: 'parent-selector',
    templateUrl: 'app/parent.component.html'
})
export class ParentComponent implements OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy {
        
    data: string = "Angular 2";
    
    ngOnChanges(changes) {
        console.log("changes:" + changes);
    }
    
    ngOnInit() {
        console.log("Init");
    }
    
    ngDoCheck() {
        console.log("Change detected");
    }
    
    ngAfterContentInit() {
        console.log("After content init");
    }
    
    ngAfterContentChecked() {
        console.log("After content checked");
    }
    
    ngAfterViewInit() {
        console.log("After view init");
    }
    
    ngAfterViewChecked() {
        console.log("After view checked");
    }
    
     ngOnDestroy() {
        console.log("Destroy");
    }
}
