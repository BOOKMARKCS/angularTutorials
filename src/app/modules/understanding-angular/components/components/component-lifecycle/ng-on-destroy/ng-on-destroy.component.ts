import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  templateUrl: './ng-on-destroy.component.html',
  styleUrls: ['./ng-on-destroy.component.sass']
})
export class NgOnDestroyComponent implements OnDestroy{
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
    alert('ngOnDestroy called!')
  }

}
