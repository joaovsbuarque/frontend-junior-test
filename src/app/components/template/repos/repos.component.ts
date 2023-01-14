import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Repositorios } from "../repos.model";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"],
})
export class ReposComponent implements OnInit {
  userRepos: Array<Repositorios> = [];
  constructor() {}
  ngOnInit(): void {
    this.userRepos = history.state.data.repoData.sort(
      (a: Repositorios, b: Repositorios) => {
        return b.stargazers_count - a.stargazers_count;
      }
    );
  }
}
