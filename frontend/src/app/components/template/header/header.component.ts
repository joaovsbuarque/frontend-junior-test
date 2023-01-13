import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  userData: User | undefined;
  constructor() {}
  ngOnInit(): void {
    this.userData = history.state.data.userData;
  }
}
