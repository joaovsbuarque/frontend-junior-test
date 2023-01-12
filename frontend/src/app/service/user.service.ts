import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl = "https://api.github.com/users/joaovsbuarque";

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getUsers(user: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
