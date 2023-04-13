import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init',
  templateUrl: './ng-after-content-init.component.html',
  styleUrls: ['./ng-after-content-init.component.sass']
})
export class NgAfterContentInitComponent implements AfterContentInit{
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
  }

}
