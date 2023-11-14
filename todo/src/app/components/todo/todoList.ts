import { TodoItem } from "./todoItem";

export class TodoList {

  constructor(public user: string, private todoItems: TodoItem[] = []) {
    // no statement required
  }

  get items(): readonly TodoItem[] {
    return this.todoItems;
  }

  addItem(task: string, completed: boolean = false) {
    this.todoItems.push(new TodoItem(task, completed));
  }

}
