import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sharing-data',
  templateUrl: './sharing-data.component.html',
  styleUrls: ['./sharing-data.component.sass']
})
export class SharingDataComponent {
  @Input() value: any;
}
