import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: any;
  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers("").subscribe((data) => {
      return (this.user = data);
    });
  }
}
