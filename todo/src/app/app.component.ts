import { Component } from '@angular/core';
import { TodoList } from './components/todo/todoList';
import { TodoItem } from './components/todo/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  private list = new TodoList("Bob", [
    new TodoItem("Go for run", true),
    new TodoItem("Get Flowers"),
    new TodoItem("Collect Tickets"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items;
  }

}
