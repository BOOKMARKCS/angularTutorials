import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.sass']
})
export class NgDoCheckComponent implements DoCheck{
  value: any;
  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }

}
