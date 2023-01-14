import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../components/template/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = "https://api.github.com/users/";

  constructor(private httpClient: HttpClient) {}

  public getUsers(user: string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + user);
  }
}
