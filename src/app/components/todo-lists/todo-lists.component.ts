import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { ModalService } from '../../services/modal/modal.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {

  todoList: TodoItem[]
  data: Subscription;

  constructor(
    private todoListService: TodoListService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }

  clearAll(): void {
    this.todoListService.deleteAll()
  }

  removeAll() {
    const data = {
      message: `Clear all LIST ?`,
      btn1: 'No',
      btn2: 'Yes'
    };
    this.data = this.modalService.Alert(data)
      .subscribe(
        async (res: any) => {
          if (res && res.data && res.data === 2) {
            this.clearAll()
          }
        }, async error => {
          console.log(error);
        }
      )
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

}
