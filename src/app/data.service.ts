import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getJsonDataPromise() {
    return new Promise((res) => {
      this.http.get("../assets/data.json").subscribe((resp) => {
        res(resp)
      })
    })
  }

  getJsonDataSubscribe() {
    return this.http.get("../assets/data.json")
  }

}
