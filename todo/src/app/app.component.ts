import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TodoList } from './components/todo/todoList';
import { TodoItem } from './components/todo/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  readonly APIURL = "https://fullstack-mern-todo-backend.onrender.com/"
  showComplete: boolean = false

  constructor(private http:HttpClient) {}

  notes:any=[];

  // private list = new TodoList("Bob", [
  //   new TodoItem("Go for run", true),
  //   new TodoItem("Get Flowers"),
  //   new TodoItem("Collect Tickets"),
  // ]);

  private list = new TodoList("Jordin");

  ngOnInit(){
    this.getTodos()
  }

  getTodos(){
    this.http.get(this.APIURL).subscribe(data => {
      this.notes = data
      this.notes.forEach((note: any) => this.list.addItem(note.text, note.complete))
    })
  }

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  saveItem(newItem: string, completed: boolean = false){
    if(newItem != "") this.list.addItem(newItem)
    this.http.post(this.APIURL + 'save', { text: newItem, complete: completed }).subscribe(data => {
      alert("Added Successfully");
    })
  }

  updateItem(itemId: string, completed: boolean){
    console.log(`Item ID (${itemId}) has been updated to the status of ${completed ? 'completed' : 'incomplete'}`)
  }

}
