import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";


export interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean,
}

@Injectable({providedIn:'root'})
export class AuthService{

    private tokenExpirationTime:any;

    
  user=new BehaviorSubject<User>(null);

 // token:string=null;

    constructor(private http:HttpClient,private router:Router){}

    signup(email:string,password:string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseApiKey,
        {email:email, password:password,returnSecureToken:true})
        .pipe(catchError(this.handleError),tap(resdata=>{
            this.handleAuthentication(resdata.email,resdata.localId,resdata.idToken,+resdata.expiresIn);
        }) );
    }
 
    login(email:string,password:string){
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseApiKey,
        {email:email, password:password,returnSecureToken:true}).pipe(catchError(this.handleError)
      ,tap(resdata=>{
        this.handleAuthentication(resdata.email,resdata.localId,resdata.idToken,+resdata.expiresIn);
        
    })  );



    }


    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');

        if(this.tokenExpirationTime){
            clearTimeout(this.tokenExpirationTime);
        }
        this.tokenExpirationTime =null;
    }


    autoLogout(expirationDuration:number){
 this.tokenExpirationTime= setTimeout(()=>{
    this.logout()
},expirationDuration
)
    }

    private handleAuthentication(email:string, userId:string,token:string,expiresIn:number){
      
            const expirationDate=new Date(new Date().getTime()+ expiresIn*1000)
            const user=new User(email,userId,token,expirationDate);
            this.user.next(user);
            this.autoLogout(expiresIn *1000)

            localStorage.setItem('userData',JSON.stringify(user));
        
        
    }

    autoLogin(){
        const userData:{
            email:string,
            id:string,
            _token:string,
            _tokenExpirationDate:string
        }=JSON.parse( localStorage.getItem('userData'));
        if(!userData){
            return ;
        }
        const loadedUser=new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));


        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration=new Date(userData._tokenExpirationDate).getTime()-new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    private handleError(errorRes:HttpErrorResponse){

        let errorMessage = 'an unknown error occurred';

        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
              errorMessage='This email already exists';
              break;  
            case 'INVALID_LOGIN_CREDENTIALS':
              errorMessage='invalid login credentials';
              break;   
          }

          return throwError(errorMessage);

    }


}