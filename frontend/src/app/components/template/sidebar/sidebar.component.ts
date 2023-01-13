import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  userData: User | undefined;
  constructor() {}
  ngOnInit(): void {
    this.userData = history.state.data.userData;
  }
}
