import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../components/template/user.model";

@Injectable({
  providedIn: "root",
})
export class RepositoriosService {
  baseUrl = "https://api.github.com/users/";

  constructor(private httpClient: HttpClient) {}

  public getRepositorios(username: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + username + "/repos");
  }
}
