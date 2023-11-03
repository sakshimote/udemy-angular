import { Component } from "@angular/core";
import {  NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
   
  })
export class AuthComponent{


  constructor(private authService:AuthService, private router:Router){}

  isLoginMode=true;
  isLoading=false;
  error:string=null;

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }


  onHandleError(){
    this.error=null;
  }

  onSubmit(form: NgForm){

    if(!form.valid){
      return ;
    }
    const email=form.value.email;
    const password=form.value.password;

    let authObs:Observable<AuthResponseData>

    this.isLoading=true;
    if(this.isLoginMode){

       authObs= this.authService.login(email,password);


    }else{
      
       authObs= this.authService.signup(email,password)


    }

    
    authObs.subscribe(resp=>{
        
      console.log(resp);
      this.isLoading=false;
      this.router.navigate(['/recipes'])
    },errorResp=>{
      console.log(errorResp);
      this.error=errorResp;
      


      this.isLoading=false;
    });

   
    form.reset();
  

  }

}