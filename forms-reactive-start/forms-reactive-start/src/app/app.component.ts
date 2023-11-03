import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  forbiddenUsername=['chris','anna'];


  signupForm:FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.email,Validators.required],this.forbiddenEmails)

      }),
    
      'gender':new FormControl('female'),
      'hobbies':new FormArray([])


    });

    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    this.signupForm.statusChanges.subscribe((value)=>{
      console.log(value);
    })

    // this.signupForm.setValue({
    //   'userData':{
    //     'username':'max',
    //     'email':'max@test.com'
    //   },
    //   'gender':'male',
    //   'hobbies':[]
    // })

    this.signupForm.patchValue({
      'userData':{
        'username':'max'
      },
      
    })
  }

  onSubmit(){
    console.log(this.signupForm);

    this.signupForm.reset();
  }

  onAddHobby(){
    const control=new FormControl(null,Validators.required);
  ( <FormArray>this.signupForm.get('hobbies')).push(control);

  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsername.indexOf(control.value)!==-1){
      return {'nameisforbidden':true};
    }
    return null;
  }

  forbiddenEmails(control:FormControl):Promise<any> | Observable<any>{
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='test@test.com'){
          resolve({'email is forbidden':true});
        }else{
          resolve(null);
        }
      },
        1500);
    });
return promise;
  }
}
