import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.sass']
})
export class ComponentLifecycleComponent implements OnInit{
  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

}
