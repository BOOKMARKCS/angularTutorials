import {AfterViewChecked, Component} from '@angular/core';

@Component({
  selector: 'app-ng-after-view-checked',
  templateUrl: './ng-after-view-checked.component.html',
  styleUrls: ['./ng-after-view-checked.component.sass']
})
export class NgAfterViewCheckedComponent implements AfterViewChecked{
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!')
  }

}
