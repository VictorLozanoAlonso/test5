import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

export class User {
  userName:string = "";    
  password:string = "";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public warning:string = "";
  userData: User = {} as User;

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void {
    if(f.valid && this.userData.userName === "bob" && this.userData.password === "myPassword"){
        this.routes.navigate(["./contactus"]);
      } 
    else if(this.userData.userName === undefined || this.userData.password === undefined){
      this.warning = "Username or Password is empty. Try again";
    }
    else{
        this.warning = "Username or Password incorrect. Try again";
    }
  }
}
