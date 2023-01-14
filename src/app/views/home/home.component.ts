import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/components/template/user.model";
import { gitUser } from "src/app/components/template/gitUser.model";
import { UserService } from "src/app/service/user.service";
import { RepositoriosService } from "src/app/service/repositorios.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  username: string | undefined;

  constructor(
    private router: Router,
    public userService: UserService,
    public repositoriesService: RepositoriosService
  ) {}
  ngOnInit(): void {}

  getUsers(resp: string) {
    this.userService.getUsers(resp).subscribe((data) => {
      this.repositoriesService.getRepositorios(resp).subscribe((repo) => {
        this.navigateToUserPage({ userData: data, repoData: repo });
      });
    });
  }

  navigateToUserPage(data: gitUser): void {
    this.router.navigate(["/user"], { state: { data: data } });
  }
}
