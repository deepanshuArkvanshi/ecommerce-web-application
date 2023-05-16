import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 

  akash!:FormGroup;



  preview:string="";  

ngOninIt(){

  this.akash= new FormGroup({
    email:new FormControl (Validators.required),
    password:new FormControl (Validators.required),
    CheckBox:new FormControl ('')
  })

 

}



loginFormdata(){
  // var abc= this.akash.get('email')?.value;
  // alert(abc);

  
  // console.log(this.akash?.value);
  }
    


}
