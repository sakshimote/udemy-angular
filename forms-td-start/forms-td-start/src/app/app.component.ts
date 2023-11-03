import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @ViewChild('f') signupForm:NgForm

  defaultQuestion='pet';
  answer='';
  genders=['male','female'];

  user={
    username:'',
    email:'',
    secretQuestion:'',
    questionAnswer:'',
    gender:''
  }

  submitted=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'',
    //   },
    //   secret:'pet',
    //   questionAns:'',
    //   gender:'male'
    // })

    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName,

      }
    });
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  //   alert('submitted');

  // }

  onSubmit(){
    // console.log(this.signupForm);
    // alert('submitted');

    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.questionAnswer=this.signupForm.value.questionAns;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
