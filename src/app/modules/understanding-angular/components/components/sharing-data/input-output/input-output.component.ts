import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.sass']
})
export class InputOutputComponent {
  @Output() value = new EventEmitter<string>();

  addInput(value: any) {
    this.value.emit(value)
      console.log(value)
  }
}
