import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods' : 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };
  email: string;
  password: string;
  loginValid:false;
  constructor(private http: HttpClient , private router: Router) { }
  login() {
    var email=this.email;
    console.log(this.password);
    var message = 'Hello from Angular!'
    this.http.post("http://localhost:5000/login", {email}).subscribe(
      (response:any) => {
        console.log(response.rows[0].isadmin)
        if(response.rows[0].isadmin == 0){
        this.router.navigateByUrl('/fileupload');
      }
      else if(response.rows[0].isadmin == 1)
      {
        this.router.navigateByUrl('/addemps');
      }
      },
      (error) => {
        console.error(error);
      })

}
}
