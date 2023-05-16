import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm!:FormGroup;

  ngOnInit(): void {

    this.loginForm=new FormGroup({
     email:new FormControl(),
     name:new FormControl(),
     password:new FormControl()

  })

    
  }

  loginSubmit(data:any){
      console.log(this.loginForm.value);
      
  }


  // 8700802407 monika hr 

}
