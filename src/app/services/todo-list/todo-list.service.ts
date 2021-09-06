import { Injectable } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../storage/local-storage.service';


const todoListStorageKey = environment.storageKey;

const defaultTodoList: TodoItem[] = [
  { title: 'Wake Up by 5am' },
  { title: '10 press up' },
  { title: 'Go to the Bathroom' },
  { title: 'Get Breakfast' },
  { title: 'Read the Bible' },
  { title: 'Check Emails' },
  { title: 'Get to Work' },

];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];


  constructor(private storageService: LocalStorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addItem(item: TodoItem): void {
    this.todoList.unshift(item);
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  updateItem(item, changes): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.todoList.push(this.todoList.splice(index, 1)[0]);
    this.saveList();
  }

  deleteItem(item): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  deleteAll(): void{
    this.todoList.length = 0;
    this.saveList();
  }

}
