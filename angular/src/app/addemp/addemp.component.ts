import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})

export class AddempComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods' : 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };
  email: string;
  first_name: string;
  last_name: string;
  dob: string;
  position: string;
  department: string;
  password: string;
  address: string;

  constructor(private http: HttpClient , private router: Router) { }

  add_emp() {
    var email=this.email;
    var first_name=this.first_name;
    var last_name=this.last_name;
    var dob=this.dob;
    var position=this.position;
    var department=this.department;
    var password=this.password;
    var address=this.address;
    this.http.post("http://localhost:5000/addemp", 
    {email,first_name,last_name,dob,position,department,password,address})
    .subscribe(
      (response:any) => {
        console.log(response.rows[0].isadmin)
        if(response.message == "success"){
        alert("emp data added to db")
      }
      },
      (error) => {
        console.error(error);
        alert("error while adding data to db")
      })
  }
}
