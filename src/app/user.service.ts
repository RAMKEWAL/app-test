import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  login(data) {
    return this._http.post("https://api.amalyze.com/0.0.12/system.user.login", data, httpOptions);
  }
}
