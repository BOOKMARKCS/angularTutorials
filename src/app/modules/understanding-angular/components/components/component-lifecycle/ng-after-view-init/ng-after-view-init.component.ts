import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  templateUrl: './ng-after-view-init.component.html',
  styleUrls: ['./ng-after-view-init.component.sass']
})
export class NgAfterViewInitComponent implements AfterContentInit{
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
  }

}
