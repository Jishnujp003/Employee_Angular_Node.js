import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods' : 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };
  email: string;
  password: string;
  constructor(private http: HttpClient) { }
  login() {
    var email=this.email;
    console.log(this.password);
    var message = 'Hello from Angular!'
    // this.http.post<any>('http://localhost:5000/login', data)
    //   .subscribe(response => {
    //     console.log(response);
    //   });
    this.http.post("http://localhost:5000/login", {email}).subscribe(
      // Handle the response from the server
      (response) => {
        console.log(response);
      },
      // Handle errors
      (error) => {
        console.error(error);
      })
    // // this.http.get("http://localhost:5000/").subscribe(data => {email=this.email;})
    // // this.http.get(`${this.url}/login?email=${email}`)
    // );
}
}
