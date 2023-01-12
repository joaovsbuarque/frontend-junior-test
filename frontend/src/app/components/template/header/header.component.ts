import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  atributoLegal = "qualquer";
  constructor() {}
  ngOnInit(): void {}
  fazerAlgo(): void {
    console.log("fazer algo");
  }
}
