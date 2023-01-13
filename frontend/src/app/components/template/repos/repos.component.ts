import { Component, OnInit } from "@angular/core";
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
        return a.stargazers_count - b.stargazers_count;
      }
    );
  }
}
