import { Component, OnInit } from "@angular/core";
import { Todo } from "../../model/Todo";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  deleteTodo(todo: Todo) {
    //Remove From Ui
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove from Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
