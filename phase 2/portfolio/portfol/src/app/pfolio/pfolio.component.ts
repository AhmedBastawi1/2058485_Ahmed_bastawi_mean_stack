import { Component, OnInit } from '@angular/core';
import {contact} from '../contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pfolio',
  templateUrl: './pfolio.component.html',
  styleUrls: ['./pfolio.component.css']
})
export class PfolioComponent implements OnInit {
  name:string="";
    userName:string="";
    passw:string="";
    msg:string="";
    b1:string="Sign Up";
    btable:string="Show Contact Details"
    FlogIn:boolean = true;
    FsignUp:boolean = false;
    FportFolio:boolean =false;
    showTable:boolean=false;
    contacts:Array<contact>=new Array();
// 
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  // 
  SignupRef = new FormGroup({
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }
// 
    Login(){
        this.FlogIn=false;
        this.FsignUp=true
   }
    SignUp(){
      this.FlogIn=true;
      this.FsignUp=false;
    }
    pFolio(){
      this.FlogIn=false;
      this.FportFolio=true;
    }
    signout(){
      this.FlogIn=true;
      this.FportFolio=false;
      this.showTable=false;
    }
    showtable(){
      if(this.showTable==false){
      this.showTable=true;
      this.btable="Hide Contact Details";
      }else{
        this.showTable=false;
        this.btable="Show Contact Details";
      }

    }
    // 
    addContact(nameRef:any,phoneRef:any){
      let name = nameRef.value;
      let phone=phoneRef.value;
      let cont = new contact(name,phone);
      this.contacts.push(cont);
    }
    // 
    adduser(){
      let Signup = this.SignupRef.value
    this.name= Signup.firstname+" "+Signup.lastname;
    this.userName=Signup.username;
    this.passw=Signup.password; 
    alert("Successful Registration");
    this.SignupRef.reset();
    this.SignUp(); 
    }
    // 
    checkUser() {
      let login = this.loginRef.value
      if(login.user==this.userName && login.pass==this.passw){
          this.pFolio()
      }else {
        alert("Your Username or your Password is Wrong Try Again..!  ")
      }
      this.loginRef.reset();
    }
}
