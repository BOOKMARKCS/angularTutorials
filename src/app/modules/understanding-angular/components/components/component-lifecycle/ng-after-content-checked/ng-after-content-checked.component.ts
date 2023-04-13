import {AfterContentChecked, Component} from '@angular/core';

@Component({
  selector: 'app-ng-after-content-checked',
  templateUrl: './ng-after-content-checked.component.html',
  styleUrls: ['./ng-after-content-checked.component.sass']
})
export class NgAfterContentCheckedComponent implements AfterContentChecked{
  ngAfterContentChecked(): void {
    console.log('mgAfterContentChecked called!');
  }

}
