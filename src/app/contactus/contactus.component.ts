import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

export class ContactUser {
  name:string = "";    
  email:string = "";
  msg:string = "";
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public warning:string = "";
  userData: ContactUser = {} as ContactUser;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void {
    if(f.valid && this.userData.name != undefined && this.userData.email != undefined && this.userData.name != " "){
      this.warning = "Message sent."
      this.userData.name = "";
      this.userData.email = "";
      this.userData.msg = "";
    } else {
      this.warning = "Some empty field. Please, try again";
    }
  }
}
