import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.sass']
})
export class NgOnChangesComponent implements OnChanges{
  // @Input() value: any;
  value: any;

  ngOnChanges(change:SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(change)
  }

}
