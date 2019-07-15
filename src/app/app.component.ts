import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "hari";

  constructor() {
    this.changeTitle("Todo");
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
