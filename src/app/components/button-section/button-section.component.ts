import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';

@Component({
  selector: 'app-button-section',
  templateUrl: './button-section.component.html',
  styleUrls: ['./button-section.component.scss']
})
export class ButtonSectionComponent implements OnInit {

  title = '';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
