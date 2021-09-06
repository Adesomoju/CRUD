import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonSectionComponent } from './components/button-section/button-section.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import { TodoListService } from './services/todo-list/todo-list.service';
import { AlertComponent } from './components/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ButtonSectionComponent,
    TodoItemComponent,
    TodoListsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
